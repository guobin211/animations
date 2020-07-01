import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
  selector: "lib-ngx-canvas",
  template: `
    <div class="ngx-canvas">
      <canvas class="canvas-inline" #canvasElement></canvas>
    </div>
  `,
  styleUrls: ["./ngx-canvas.css"],
})
export class NgxCanvasComponent implements AfterViewInit {
  @Output() canvasInit: EventEmitter<HTMLCanvasElement> = new EventEmitter<HTMLCanvasElement>();
  @ViewChild("canvasElement") canvasEl: ElementRef<HTMLCanvasElement>;
  ngAfterViewInit(): void {
    this.canvasInit.emit(this.canvasEl.nativeElement);
  }
}
