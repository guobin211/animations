/**
 * code.ts
 * @author GuoBin 2020-07-02
 */

export const TS_CODE = `
ngAfterViewInit(): void {
  this.canvas = this.canvasElementRef.nativeElement;
  this.ctx = Canvas.initCtx(this.canvas).ctx;
  // 只能选择一种渲染方式
  drawText(this.ctx);
  drawWithState(this.ctx);
}

ngOnDestroy(): void {
  window.cancelAnimationFrame(this.anim);
}

function drawText(ctx: R2D) {
  const renderList = [
    "CanvasRenderingContext2D",
    "WebGLRenderingContext",
    "WebGL2RenderingContext",
    "ImageBitmapRenderingContext"
  ];
  ctx.font = "24px Roboto";
  for (let i = 0; i < renderList.length; i++) {
    ctx.fillText(renderList[i], 20, 50 * i + 200);
  }
}

/**
 * ctx.save() 将当前的context状态保存到栈中, 方便隔离
 * @param ctx R2D
 */
function drawWithState(ctx: R2D) {
  // 保存默认状态
  ctx.save();
  ctx.fillStyle = "#db0f2c";
  ctx.fillRect(0, 0, 50, 50);
  // 保存状态 1 红色
  ctx.save();
  // 改变状态 2 蓝色
  ctx.fillStyle = "#09F";
  ctx.fillRect(50, 0, 50, 50);
  // 保存状态 2 蓝色
  ctx.save();
  // 改变颜色 3
  ctx.fillStyle = "#f08300";
  ctx.globalAlpha = 0.5;
  ctx.fillRect(100, 0, 50, 50);
  // 恢复到状态 2 蓝色
  ctx.restore();
  ctx.fillRect(150, 0, 50, 50);
  // 恢复到状态 1 红色
  ctx.restore();
  ctx.fillRect(200, 0, 50, 50);
  // 恢复到默认状态
  ctx.restore();
}

/**
 * 初始化2D Context
 * @param canvas HTMLCanvasElement
 * @param option CanvasRenderingContext2DSettings
 */
static initCtx(canvas: HTMLCanvasElement, option?: CanvasRenderingContext2DSettings) {
  const dpr = setUpDpr(canvas);
  const ctx = canvas.getContext("2d", option);
  ctx.scale(dpr, dpr);
  return {dpr, ctx};
}

ngAfterViewInit(): void {
  this.canvas = this.canvasElementRef.nativeElement;
  this.ctx = Canvas.initCtx(this.canvas).ctx;
  // 只能选择一种渲染方式
  // this.gl = this.canvas.getContext("webgl");
  // this.gl2 = this.canvas.getContext("webgl2");
  // this.bMap = this.canvas.getContext("bitmaprenderer");
  drawText(this.ctx);
}

export enum ContextID {
  DEFAULT = "2d",
  BITMAP = "bitmaprenderer",
  GL = "webgl",
  GLL = "webgl2",
}

export interface CanvasOption {
  /**
   * canvas 元素
   */
  dom: HTMLCanvasElement;
  /**
   * 渲染方式
   */
  contextId?: ContextID;
  /**
   * 渲染引擎配置
   */
  options?:
    | CanvasRenderingContext2DSettings
    | ImageBitmapRenderingContextSettings
    | WebGLContextAttributes;
}
`;

export const HTML_CODE = `
<div class="page">
  <div class="title">
    <h1>Canvas Context 图形绘制上下文</h1>
  </div>
  <div class="row">
    <div class="left">
      <canvas width="500" height="500" #canvasElementRef>
        your browser not support canvas!
      </canvas>
    </div>
    <div class="right">
      <app-my-tabs>
        <lib-ngx-prism class="ts" [code]="tsCode"></lib-ngx-prism>
      </app-my-tabs>
    </div>
  </div>
</div>

`;
