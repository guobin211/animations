/**
 * code.ts
 * @author GuoBin 2020-07-05
 */

export const TS_CODE = `
const animateFn: AnimateFn = (canvas, context, callback) => {
  const ball = new Ball(
      {
        x: canvas.width / 2,
        y: canvas.height / 2,
        color: Colors.primary,
        radius: 30
      }
  );
  let w, h, isMouseDown, oldX, oldY, speed,
      vx = Math.random() * 10 + 5,
      vy = -10,
      gravity = 1.2,
      bounce = -0.8;
  const offLeft = elementToLeft(canvas), offTop = elementToTop(canvas);
  canvas.addEventListener("mousedown", (event) => {
        // 点击事件是否在球的控制区域内部
        if (Detection.containPoint(ball.getBounds(),
            {x: event.x - offLeft, y: event.y - offTop})) {
          w = event.x - ball.x;
          h = event.y - ball.y;
          isMouseDown = true;
          oldX = ball.x;
          oldY = ball.y;
          canvas.addEventListener("mouseup", onMouseUp, false);
          canvas.addEventListener("mousemove", onMouseMove, false);
        }
      },
      false);

  function onMouseUp(event) {
    isMouseDown = false;
    canvas.removeEventListener("mouseup", onMouseUp, false);
    canvas.removeEventListener("mousemove", onMouseMove, false);
  }

  function onMouseMove(event) {
    // 鼠标跟随
    ball.x = event.x - w;
    ball.y = event.y - h;
  }
  // 计算高度弹性
  function checkBounds() {
    const left = canvas.width,
        right = 0,
        top = 0,
        bottom = canvas.height;
    ball.x += vx;
    vy += gravity;
    ball.y += vy;
    if (ball.x + ball.radius > left) {
      vx *= bounce;
      ball.x = left - ball.radius;
    } else if (ball.x - ball.radius < right) {
      vx *= bounce;
      ball.x = ball.radius;
    }
    if (ball.y + ball.radius > bottom) {
      vy *= bounce;
      ball.y = bottom - ball.radius;
    } else if (ball.y - ball.radius < top) {
      vy *= bounce;
      ball.y = ball.radius;
    }
  }
  // 计算坠落速度
  function trackVelocity() {
    vx = ball.x - oldX;
    vy = ball.y - oldY;
    oldX = ball.x;
    oldY = ball.y;
    speed = Math.sqrt(vx * vx + vy * vy);
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (!isMouseDown) {
      checkBounds();
    } else {
      trackVelocity();
    }
    ball.draw(context);
  }

  start();
};

`;
