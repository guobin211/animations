import { Component, Input } from "@angular/core";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"]
})
export class TitleComponent {
  @Input() data = "";
  @Input() level = 1;

  constructor() {}
}
