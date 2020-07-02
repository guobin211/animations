import { Component, OnInit } from "@angular/core";
import { CanvasHelper } from "../../helper/CanvasHelper";

@Component({
  selector: "app-canvas-renderer",
  templateUrl: "./canvas-renderer.component.html",
  styleUrls: ["./canvas-renderer.component.scss"],
})
export class CanvasRendererComponent extends CanvasHelper implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
