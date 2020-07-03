import { Component, Input } from "@angular/core";

@Component({
  selector: "app-my-tabs",
  templateUrl: "./my-tabs.component.html",
  styleUrls: ["./my-tabs.component.scss"],
})
export class MyTabsComponent {
  @Input() useSlot: boolean;
}
