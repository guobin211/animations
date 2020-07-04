/**
 * SideListData.ts
 * @author GuoBin 2020-06-30
 */
import { SideItem } from "../_base";
import { Routes } from "@angular/router";
import { canvasRoutes } from "../../m-canvas/m-canvas-routing.module";
import { caseRoutes } from "../../m-case/m-case-routing.module";

/**
 * 给子路由加前缀 prefix
 * @param routes Routes
 * @param prefix string
 */
function transformRoutesToSide(routes: Routes, prefix: string = ""): SideItem[] {
  const res: SideItem[] = [];
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (route.data) {
      const item = {name: route.data.name, path: prefix + route.path};
      res.push(item);
    }
  }
  return res;
}

const sideData: SideData[] = [
  {name: "关于", path: "/about"},
  {name: "Canvas", path: "/canvas/", child: transformRoutesToSide(canvasRoutes)},
  {name: "More Case", path: "/case/", child: transformRoutesToSide(caseRoutes)}
];

export interface SideData {
  name: string;
  path: string;
  child?: SideItem[];
}

export const SideListData = sideData;
