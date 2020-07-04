/**
 * code.ts
 * @author GuoBin 2020-07-04
 */

export const TS_CODE = `
/**
 * 键盘控制运动
 */
const spaceAnimate: AnimateFn = (canvas, context, callback) => {
  const ship = new SpaceShip({
    x: canvas.width / 2,
    y: canvas.height / 2,
    lineWidth: 2,
    fillStyle: "#000"
  });
  let f = 0.97, vr = 0, vx = 0, vy = 0, ax = 0, ay = 0, speed = 0, angle = 0;
  window.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      // vr旋转速度
      case 37:
        vr = -3;
        break;
      case 39:
        vr = 3;
        break;
      case 38:
        // 加速度
        speed = 0.5;
        ship.showFlame = true;
        break;
    }
  }, false);
  window.addEventListener("keyup", (event) => {
    vr = 0;
    speed = 0;
    ship.showFlame = false;
  }, false);

  function draw() {
    ship.rotation += vr * Math.PI / 180;
    angle = ship.rotation;
    ax = Math.cos(angle) * speed;
    ay = Math.sin(angle) * speed;
    vx += ax;
    vy += ay;
    vx *= f;
    vy *= f;
    ship.x += vx;
    ship.y += vy;
    if (ship.x + ship.width / 2 > canvas.width) {
      ship.x = canvas.width - ship.width;
      vx *= -1;
    } else if (ship.x < ship.width / 2) {
      ship.x = ship.width / 2;
      vx *= -1;
    }
    if (ship.y + ship.height / 2 > canvas.height) {
      ship.y = canvas.height - ship.height / 2;
      vy *= -1;
    } else if (ship.y < ship.height / 2) {
      ship.y = ship.height / 2;
      vy *= -1;
    }
    ship.draw(context);
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw();
  }

  start();
};
`;
