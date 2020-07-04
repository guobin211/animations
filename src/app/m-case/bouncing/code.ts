/**
 * code.ts
 * @author GuoBin 2020-07-04
 */

export const TS_CODE = `
private initAnimate(call: CallBackNum) {
  const {canvas, ctx} = this;
  const centerX = canvas.width / 2, centerY = canvas.height / 2;
  let vx = Math.random() * 10 - 5, vy = Math.random() * 10 - 5;
  const ball = new Ball({
    x: centerX,
    y: centerY,
    vx,
    vy
  });
  // 弹性碰撞反馈, 重力系数
  const bounces = -0.7, gravity = 0.2;

  /**
   * 每次绘制图形时检测边界碰撞
   * 动态改变小球位置
   */
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    vy += gravity;
    ball.x += vx;
    ball.y += vy;
    if (ball.x + ball.radius > canvas.width) {
      ball.x = canvas.width - ball.radius;
      vx *= bounces;
    }
    if (ball.x - ball.radius < 0) {
      ball.x = ball.radius;
      vx *= bounces;
    }
    if (ball.y + ball.radius > canvas.height) {
      ball.y = canvas.height - ball.radius;
      vy *= bounces;
    }
    if (ball.y - ball.radius < 0) {
      ball.y = ball.radius;
      vy *= bounces;
    }
    ball.draw(ctx);
  }

  (function start() {
    const n = window.requestAnimationFrame(start);
    call(n);
    draw();
  })();
}

/**
 * 摩擦力
 * @param canvas CanvasEl
 * @param context R2D
 * @param callback CallBackNum
 */
function friction(canvas: CanvasEl, context: R2D, callback: CallBackNum) {
  const f = 0.9;
  const ball = new Ball(
      {
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.random() * 50 - 25,
        vy: Math.random() * 50 - 25
      }
  );

  function draw() {
    ball.vx *= f;
    ball.vy *= f;
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.draw(context);
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw();
  }

  start();
}

/**
 * 小球移除动画
 * @param canvas CanvasEl
 * @param context R2D
 * @param callback CallBackNum
 */
function drawMoreBall(canvas: CanvasEl, context: R2D, callback: CallBackNum) {
  const balls: Ball[] = [];
  const numBall = 10;
  const canWid = canvas.width;
  const canHei = canvas.height;
  for (let i = 0; i < numBall; i++) {
    const size = Math.random() * 20 + 5;
    const color = Math.random() * (0xffffff);
    const ball = new Ball({
      id: "ball_" + i,
      radius: size,
      color: Colors.parseColor(color),
      x: Math.random() * canWid,
      y: Math.random() * canHei,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1
    });
    balls.push(ball);
  }

  /**
   * 绘制单个小球,越过边界就移除
   * @param ball Ball
   * @param pos index
   */
  function drawWithDelete(ball: Ball, pos: number) {
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x - ball.radius > canvas.width
        || ball.radius + ball.x < 0
        || ball.y - ball.radius > canvas.height
        || ball.y + ball.radius < 0) {
      balls.splice(pos, 1);
      if (balls.length > 0) {
        console.log("移除" + ball.id + "<br/>");
      } else {
        console.log("全部移除");
      }
    }
    ball.draw(context);
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    // 重绘前清理画布
    context.clearRect(0, 0, canvas.width, canvas.height);
    let i = balls.length;
    while (i--) {
      drawWithDelete(balls[i], i);
    }
  }

  start();
}

/**
 * 生成器动画
 * @param canvas CanvasEl
 * @param context R2D
 * @param callback CallBackNum
 */
function buildMore(canvas: CanvasEl, context: R2D, callback: CallBackNum) {
  const balls: Ball[] = [];
  const numBall = 50;
  for (let i = 0; i < numBall; i++) {
    const ball = new Ball({
      id: "ball_" + i,
      color: Colors.random(),
      radius: Math.random() * 20 + 10,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1
    });
    balls.push(ball);
  }

  function drawItem(ball: Ball, pos: number) {
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x - ball.radius > canvas.width
        || ball.radius + ball.x < 0
        || ball.y - ball.radius > canvas.height
        || ball.y + ball.radius < 0) {
      ball.x = canvas.width / 2;
      ball.y = canvas.height;
      ball.vx = Math.random() * (2) - 1;
      ball.vy = Math.random() * (-2) - 1;
    }
    ball.draw(context);
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    context.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(drawItem);
  }

  start();
}
`;
export const HTML_CODE = `
<div class="page">
  <div class="title">
    <h1>弹性与摩擦力</h1>
  </div>
  <div class="row">
    <div class="left">
      <lib-ngx-canvas (canvasInit)="initCanvas($event)"></lib-ngx-canvas>
      <h1></h1>
      <button mat-raised-button color="primary" (click)="reset()">弹性</button>
      <button mat-raised-button color="primary" (click)="friction()">摩擦力</button>
      <button mat-raised-button color="primary" (click)="buildAnimate()">生成动画</button>
      <button mat-raised-button color="primary" (click)="removeAnimate()">移除动画</button>
    </div>
    <div class="right">
      <app-my-tabs>
        <lib-ngx-prism class="ts" [code]="tsCode"></lib-ngx-prism>
        <lib-ngx-prism class="html" [code]="htmlCode" lang="html"></lib-ngx-prism>
        <lib-ngx-prism class="css" [code]="cssCode" lang="css"></lib-ngx-prism>
      </app-my-tabs>
    </div>
  </div>
</div>
`;
