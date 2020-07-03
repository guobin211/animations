/**
 * code.ts
 * @author GuoBin 2020-07-03
 */

export const TS_CODE = `
/**
 * 绘制形变
 * transform(a, b, c, d, e, f) 缩放 + 倾斜 + 平移
 * a 水平方向缩放
 * b 水平方向的倾斜偏移
 * c 竖直方向的倾斜偏移
 * d 竖直方向的缩放
 * e 水平方向的移动
 * f 竖直方向的移动
 * 变换矩阵的描述
 * [
 *  a  c  e
 *  b  d  f
 *  0  0  1
 * ]
 * @param ctx R2D
 */
function draw(ctx: R2D) {
  ctx.save();
  const sin = Math.sin(Math.PI / 6);
  const cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  let c = 0;
  for (let i = 0; i <= 12; i++) {
    c = Math.floor(255 / 12 * i);
    ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }
  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx.fillRect(0, 50, 100, 100);
  ctx.restore();
  ctx.fillRect(200, 100, 100, 100);
}

function drawRect(ctx: R2D) {
  // 水平缩放 1 = 宽度100
  // 水平倾斜 1 = 100, 右上坐标 y + 100
  // 垂直倾斜 0 = 0
  // 竖直缩放 1 = 100
  // 水平移动 200 x = x + 200
  // 垂直移动 200 y = y + 200
  ctx.transform(1, 1, 0, 1, 200, 200);
  // 宽高100的正放型
  ctx.fillRect(0, 0, 100, 100);
  ctx.setTransform();
}
`;

export const HTML_CODE = `
<div class="page">
  <div class="title">
    <h1>Canvas Transform 形变</h1>
  </div>
  <div class="row">
    <div class="left">
      <lib-ngx-canvas (canvasInit)="initCanvas($event)"></lib-ngx-canvas>
    </div>
    <div class="right">
      <app-my-tabs>
        <lib-ngx-prism class="ts" [code]="tsCode"></lib-ngx-prism>
      </app-my-tabs>
    </div>
  </div>
</div>
`;
