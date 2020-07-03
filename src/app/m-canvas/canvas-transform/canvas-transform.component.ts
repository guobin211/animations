import { AfterViewInit, Component } from "@angular/core";
import { R2D } from "../../../typings";
import { AutoCanvasComponent } from "../../shared/auto-canvas/auto-canvas.component";

@Component({
  selector: "app-canvas-transform",
  templateUrl: "./canvas-transform.component.html",
  styleUrls: ["./canvas-transform.component.scss"]
})
export class CanvasTransformComponent extends AutoCanvasComponent implements AfterViewInit {
  constructor() {super(); }

  ngAfterViewInit() {
    draw(this.ctx);
  }
}

function draw(ctx: R2D) {
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
}
