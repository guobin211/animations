import { ChangeDetectionStrategy, Component } from "@angular/core";
import side from "./utils/side_data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  sideNav = side;
  isActive(el): boolean {
    return window.location.href.endsWith(el.path);
  }
}
