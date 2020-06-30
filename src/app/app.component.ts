import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { SideListData } from "./models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  sideNav = SideListData;
  active = { ...SideListData[0] };

  isActive(el): boolean {
    return window.location.href.endsWith(el.path);
  }

  ngOnInit(): void {
    for (const el of this.sideNav) {
      if (window.location.href.endsWith(el.path)) {
        this.active = el;
      }
    }
  }
}
