/**
 * SideListData.ts
 * @author GuoBin 2020-06-30
 */
import { SideItem } from "../_base";
import { Routes } from "@angular/router";
import { canvasRoutes } from "../../m-canvas/m-canvas-routing.module";

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

const data: SideItem[] = [...transformRoutesToSide(canvasRoutes, "/canvas/")];

export const SideListData = data;
