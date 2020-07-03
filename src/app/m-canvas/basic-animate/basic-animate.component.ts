import { Component, OnInit } from "@angular/core";
import { AutoCanvasComponent } from "../../shared/auto-canvas/auto-canvas.component";

@Component({
  selector: "app-basic-animate",
  templateUrl: "./basic-animate.component.html",
  styleUrls: ["./basic-animate.component.scss"],
})
export class BasicAnimateComponent extends AutoCanvasComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
