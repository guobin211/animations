/**
 * code.ts
 * @author GuoBin 2020-07-02
 */

export const tsCode = `
// 动画启动
function drawAnim() {
  const n = window.requestAnimationFrame(drawAnim);
  callback(n);
  // 清除画布
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // 用透明度fillRect添加长尾效果
  context.save();
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
  ball0.x += ball0.vx;
  ball0.y += ball0.vy;
  ball1.x += ball1.vx;
  ball1.y += ball1.vy;
  // 检测碰撞
  ballCollision(ball0, ball1);
  wallCollision(ball0);
  wallCollision(ball1);
  // 绘制
  ball0.draw(context);
  ball1.draw(context);
}

// 墙体碰撞检测
function wallCollision(ball: Ball) {
  if (ball.x + ball.radius > canvas.width) {
    ball.x = canvas.width - ball.radius;
    ball.vx *= bounce;
  } else if (ball.x < ball.radius) {
    ball.x = ball.radius;
    ball.vx *= bounce;
  }
  if (ball.y + ball.radius > canvas.height) {
    ball.y = canvas.height - ball.radius;
    ball.vy *= bounce;
  } else if (ball.y < ball.radius) {
    ball.y = ball.radius;
    ball.vy *= bounce;
  }
}
// 球体碰撞检测
function ballCollision(ballA, ballB) {
  const dx = ballA.x - ballB.x,
      dy = ballA.y - ballB.y,
      dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < ballA.radius + ballB.radius) {
    const vxTotal = ballA.vx - ballB.vx;
    const vxAFinal = ((ballA.mass - ballB.mass) * ballA.vx + 2 * ballB.mass * ballB.vx)
        / (ballA.mass + ballB.mass);
    const vxBFinal = vxTotal + vxAFinal;
    ballA.vx = vxAFinal;
    ballB.vx = vxBFinal;
    ballA.x += ballA.vx;
    ballB.x += ballB.vx;
    const vyTotal = ballA.vy - ballB.vy;
    const vyAFinal = ((ballA.mass - ballB.mass) * ballA.vy + 2 * ballB.mass * ballB.vy)
        / (ballA.mass + ballB.mass);
    const vyBFinal = vyTotal + vyAFinal;
    ballA.vy = vyAFinal;
    ballB.vy = vyBFinal;
    ballA.y += ballA.vy;
    ballB.y += ballB.vy;
  }
}

`;
