/**
 * code.ts
 * @author GuoBin 2020-07-05
 */

export const TS_CODE = `
const animateFn: AnimateFn = (canvas, context, callback) => {
  const balls: Ball[] = new Array(50);
  for (let i = 0; i < balls.length; i++) {
    balls[i] = new Ball({
      color: Colors.random(),
      radius: Math.random() * 10 + 5,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      mass: 1
    });
  }

  /**
   * 计算引力加速度
   * @param partA Ball
   * @param partB Ball
   */
  function gravitate(partA: Ball, partB: Ball) {
    const dx = partB.x - partA.x;
    const dy = partB.y - partA.y;
    const distQ = dx * dx + dy * dy;
    // 球体之间的距离
    const dist = Math.sqrt(distQ);
    // 球体之间的引力
    const F = (partA.mass * partB.mass) / distQ;
    // 球体的引力加速度
    const ax = F * dx / dist;
    const ay = F * dy / dist;
    // 偏移距离
    partA.vx += ax / partA.mass;
    partA.vy += ay / partA.mass;
    partB.vx -= ax / partB.mass;
    partB.vy -= ay / partB.mass;
  }

  /**
   * 碰撞检测,相互作用力,新的加速度与偏移距离
   */
  function checkCollision(ball0: Ball, ball1: Ball) {
    const dx = ball1.x - ball0.x,
        dy = ball1.y - ball0.y,
        dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < ball0.radius + ball1.radius) {
      let angle = Math.atan2(dy, dx),
          sin = Math.sin(angle),
          cos = Math.cos(angle),
          // rotate ball0's position
          pos0 = {x: 0, y: 0},
          // rotate ball1's position
          pos1 = rotate(dx, dy, sin, cos, true),
          // rotate ball0's velocity
          vel0 = rotate(ball0.vx, ball0.vy, sin, cos, true),
          // rotate ball1's velocity
          vel1 = rotate(ball1.vx, ball1.vy, sin, cos, true),
          // collision reaction
          vxTotal = vel0.x - vel1.x;
      vel0.x = ((ball0.mass - ball1.mass) * vel0.x + 2 * ball1.mass * vel1.x)
          / (ball0.mass + ball1.mass);
      vel1.x = vxTotal + vel0.x;
      // update position - to avoid objects becoming stuck together
      const absV = Math.abs(vel0.x) + Math.abs(vel1.x),
          overlap = (ball0.radius + ball1.radius) - Math.abs(pos0.x - pos1.x);
      pos0.x += vel0.x / absV * overlap;
      pos1.x += vel1.x / absV * overlap;
      // rotate positions back
      const pos0F = rotate(pos0.x, pos0.y, sin, cos, false),
          pos1F = rotate(pos1.x, pos1.y, sin, cos, false);
      // adjust positions to actual screen positions
      ball1.x = ball0.x + pos1F.x;
      ball1.y = ball0.y + pos1F.y;
      ball0.x = ball0.x + pos0F.x;
      ball0.y = ball0.y + pos0F.y;
      // rotate velocities back
      const vel0F = rotate(vel0.x, vel0.y, sin, cos, false),
          vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
      ball0.vx = vel0F.x;
      ball0.vy = vel0F.y;
      ball1.vx = vel1F.x;
      ball1.vy = vel1F.y;
    }
  }

  /**
   * 计算旋转之后的坐标
   */
  function rotate(x: number, y: number, sin: number, cos: number, reverse: boolean) {
    return {
      x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
      y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
    };
  }

  function draw(ball: Ball) {
    ball.draw(context);
  }

  /**
   * 运动检测
   */
  function move(partA: Ball, i: number) {
    partA.x += partA.vx;
    partA.y += partA.vy;
    for (let j = i + 1; j < balls.length; j++) {
      const partB = balls[j];
      checkCollision(partA, partB);
      gravitate(partA, partB);
    }
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    context.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(move);
    balls.forEach(draw);
  }

  start();
};
`;
