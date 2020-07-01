import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanvasComponent } from "./canvas/canvas.component";
import { CanvasContextComponent } from "./canvas-context/canvas-context.component";
import { CanvasRendererComponent } from "./canvas-renderer/canvas-renderer.component";
import { CanvasWebGlComponent } from "./canvas-web-gl/canvas-web-gl.component";
import { CanvasImageComponent } from "./canvas-image/canvas-image.component";


const canvasRoutes: Routes = [
  {path: "", redirectTo: "canvas", pathMatch: "full"},
  {path: "canvas", component: CanvasComponent},
  {path: "context", component: CanvasContextComponent},
  {path: "renderer", component: CanvasRendererComponent},
  {path: "webgl", component: CanvasWebGlComponent},
  {path: "image", component: CanvasImageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(canvasRoutes)],
  exports: [RouterModule]
})
export class MCanvasRoutingModule { }
