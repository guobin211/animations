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

export const canvasRoutes: Routes = [
  { path: "", redirectTo: "canvas", pathMatch: "full" },
  { path: "canvas", component: CanvasComponent, data: { name: "Canvas" } },
  { path: "context", component: CanvasContextComponent, data: { name: "Canvas Context" } },
  { path: "renderer", component: CanvasRendererComponent, data: { name: "Canvas Render" } },
  { path: "image", component: CanvasImageComponent, data: { name: "Canvas Image" } },
  { path: "webgl", component: CanvasWebGlComponent, data: { name: "Canvas WebGL" } },
  { path: "bill", component: BilliardsComponent, data: { name: "桌球运动" } },
  { path: "ball", component: BallAnimComponent, data: { name: "球体碰撞连线" } },
  { path: "bezier", component: BezierComponent, data: { name: "贝塞尔曲线" } },
];

@NgModule({
  imports: [RouterModule.forChild(canvasRoutes)],
  exports: [RouterModule],
})
export class MCanvasRoutingModule {}
