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
import { RoundProgressComponent } from "./round-progress/round-progress.component";
import { ScrollTextComponent } from "./scroll-text/scroll-text.component";
import { CanvasTransformComponent } from "./canvas-transform/canvas-transform.component";
import { BasicAnimateComponent } from "./basic-animate/basic-animate.component";
import { ClockComponent } from "./clock/clock.component";

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
    RoundProgressComponent,
    ScrollTextComponent,
    CanvasTransformComponent,
    BasicAnimateComponent,
    ClockComponent,
  ],
  imports: [CommonModule, MCanvasRoutingModule, SharedModule],
})
export class MCanvasModule {}
