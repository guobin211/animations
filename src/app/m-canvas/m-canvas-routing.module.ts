import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanvasComponent } from "./canvas/canvas.component";
import { CanvasContextComponent } from "./canvas-context/canvas-context.component";
import { CanvasRendererComponent } from "./canvas-renderer/canvas-renderer.component";
import { CanvasWebGlComponent } from "./canvas-web-gl/canvas-web-gl.component";
import { CanvasImageComponent } from "./canvas-image/canvas-image.component";
import { BilliardsComponent } from "./billiards/billiards.component";
import { BallAnimComponent } from "./ball-anim/ball-anim.component";
import { BezierComponent } from "./bezier/bezier.component";
import { RoundProgressComponent } from "./round-progress/round-progress.component";
import { ScrollTextComponent } from "./scroll-text/scroll-text.component";
import { CanvasTransformComponent } from "./canvas-transform/canvas-transform.component";
import { BasicAnimateComponent } from "./basic-animate/basic-animate.component";

export const canvasRoutes: Routes = [
  { path: "", redirectTo: "canvas", pathMatch: "full" },
  { path: "canvas", component: CanvasComponent, data: { name: "Canvas" } },
  { path: "context", component: CanvasContextComponent, data: { name: "Canvas Context" } },
  { path: "renderer", component: CanvasRendererComponent, data: { name: "Canvas Render" } },
  { path: "transform", component: CanvasTransformComponent, data: { name: "Canvas Transform" } },
  { path: "image", component: CanvasImageComponent, data: { name: "Canvas Image" } },
  { path: "webgl", component: CanvasWebGlComponent, data: { name: "Canvas WebGL" } },
  { path: "basic", component: BasicAnimateComponent, data: { name: "基本动画" } },
  { path: "bill", component: BilliardsComponent, data: { name: "桌球运动" } },
  { path: "ball", component: BallAnimComponent, data: { name: "球体碰撞连线" } },
  { path: "bezier", component: BezierComponent, data: { name: "贝塞尔曲线" } },
  { path: "round", component: RoundProgressComponent, data: { name: "圆形进度条" } },
  { path: "scroll-text", component: ScrollTextComponent, data: { name: "滚动文字" } },
];

@NgModule({
  imports: [RouterModule.forChild(canvasRoutes)],
  exports: [RouterModule],
})
export class MCanvasRoutingModule {}
