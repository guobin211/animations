/**
 * code.ts
 * @author GuoBin 2020-07-02
 */

export const TS_CODE = `
export class CanvasComponent implements AfterViewInit, OnDestroy {
  ts = TS_CODE;
  html = HTML_CODE;
  css = CSS_CODE;
  private animate: number;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dpr = 1;

  ngAfterViewInit(): void {
    this.initContext();
    drawRect(this.ctx);
    drawTranslate(this.ctx);
    drawRotate(this.ctx);
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.animate);
  }

  // 获取dom元素，实例化context
  private initContext() {
    const element = document.getElementById("m-canvas-canvas");
    if (element instanceof HTMLCanvasElement) {
      const dpr = window.devicePixelRatio || 1;
      const rect = element.getBoundingClientRect();
      element.width = rect.width * dpr;
      element.height = rect.height * dpr;
      this.canvas = element;
      this.dpr = dpr;
      // 选择渲染方式,更多的渲染方式/core/_impl/Canvas.ts
      this.ctx = element.getContext("2d", {alpha: false, desynchronized: false});
      this.ctx.scale(dpr, dpr);
    } else {
      console.error(\`element not canvas!\`);
    }
  }
}

/**
 * 绘制矩形
 * @param ctx R2D => CanvasRenderingContext2D
 * R2D 类型简写
 */
function drawRect(ctx: R2D) {
  // 填充颜色
  ctx.fillStyle = Colors.lightTeal;
  ctx.fillRect(150, 150, 100, 100);
}

/**
 * 平移操作
 * @param ctx R2D
 */
function drawTranslate(ctx: R2D) {
  for (let j = 0; j < 3; j++) {
    ctx.save();
    ctx.fillStyle = "rgb(" + (51 * j) + ", " + (255 - 51 * j) + ", 255)";
    // translate(x, y) 平移操作, 将canvas画布水平垂直移动
    ctx.translate(10 + j * 50, 10 + j * 50);
    ctx.fillRect(0, 0, 25, 25);
    ctx.restore();
  }
}

/**
 * 旋转操作,通常配合translate()使用
 * @param ctx R2D
 */
function drawRotate(ctx: R2D) {
  ctx.save();
  // 原图形的位置, 中心点 350， 150
  ctx.fillRect(300, 100, 100, 100);
  ctx.fillStyle = "#f08300";
  // 绕着原图形的中心点旋转
  ctx.translate(350, 150);
  // 1 / 8 弧形
  ctx.rotate(Math.PI / 4);
  // 从新的画布绘制图形
  ctx.fillRect(0, 0, 100, 100);
  ctx.restore();
}
`;
export const HTML_CODE = `
<div class="page">
  <div class="title">
    <h1>Canvas Detail</h1>
  </div>
  <div class="row">
    <div class="left">
      <canvas id="m-canvas-canvas" width="500" height="500" style="background: rgba(0, 0, 0, 1)">
        your browser not support canvas!
      </canvas>
    </div>
    <div class="right">
      <app-my-tabs>
        <lib-ngx-prism [code]="ts" class="ts"></lib-ngx-prism>
        <lib-ngx-prism [code]="html" class="html"></lib-ngx-prism>
      </app-my-tabs>
    </div>
  </div>
</div>
`;
export const CSS_CODE = `
// 设置dom元素样式
.left {
  background: cadetblue;
}

#m-canvas-canvas {
  width: 500px;
  height: 500px;
  background: rgba(0, 0, 0, 1);
  // 有透明度会叠加父元素的颜色
  opacity: 1;
}
`;
