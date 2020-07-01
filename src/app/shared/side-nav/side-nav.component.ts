import { Component, OnInit } from "@angular/core";
import { SideListData } from "../../models/_impl";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {

  listData = SideListData;
  constructor() { }

  ngOnInit(): void {
  }
}
