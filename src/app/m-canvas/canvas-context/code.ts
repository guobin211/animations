/**
 * code.ts
 * @author GuoBin 2020-07-02
 */

export const TS_CODE = `
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

function drawText(ctx: R2D) {
  const renderList = ["CanvasRenderingContext2D", "WebGLRenderingContext",
                      "WebGL2RenderingContext", "ImageBitmapRenderingContext"];
  ctx.font = "24px Roboto";
  for (let i = 0; i < renderList.length; i++) {
    ctx.fillText(renderList[i], 20, 50 * (i + 1));
  }
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
