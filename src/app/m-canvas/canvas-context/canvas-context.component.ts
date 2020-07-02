import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { BaseCanvas } from "../../decorator/BaseCanvas";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-canvas-context",
  templateUrl: "./canvas-context.component.html",
  styleUrls: ["./canvas-context.component.scss"]
})
export class CanvasContextComponent extends BaseCanvas implements AfterViewInit, OnDestroy {

  code = "";
  constructor() {super(); }

  ngAfterViewInit(): void {
    // todo
  }

  ngOnDestroy() {
    // todo
  }
}
