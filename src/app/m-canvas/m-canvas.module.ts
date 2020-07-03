import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MCanvasRoutingModule } from "./m-canvas-routing.module";
import { CanvasComponent } from "./canvas/canvas.component";
import { CanvasContextComponent } from "./canvas-context/canvas-context.component";
import { CanvasRendererComponent } from "./canvas-renderer/canvas-renderer.component";
import { CanvasWebGlComponent } from "./canvas-web-gl/canvas-web-gl.component";
import { CanvasImageComponent } from "./canvas-image/canvas-image.component";
import { SharedModule } from "../shared/shared.module";
import { BilliardsComponent } from "./billiards/billiards.component";
import { BallAnimComponent } from "./ball-anim/ball-anim.component";
import { BezierComponent } from "./bezier/bezier.component";

@NgModule({
  declarations: [
    CanvasComponent,
    CanvasContextComponent,
    CanvasRendererComponent,
    CanvasWebGlComponent,
    CanvasImageComponent,
    BilliardsComponent,
    BallAnimComponent,
    BezierComponent,
  ],
  imports: [CommonModule, MCanvasRoutingModule, SharedModule],
})
export class MCanvasModule {}
