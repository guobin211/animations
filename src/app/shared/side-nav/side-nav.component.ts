import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { SideListData } from "../../models/_impl";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
  listData = [];

  constructor() {
    this.listData = SideListData;
  }

  ngOnInit(): void {}
}
