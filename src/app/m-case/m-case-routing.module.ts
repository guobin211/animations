import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BouncingComponent } from "./bouncing/bouncing.component";
import { KeyboardActionComponent } from "./keyboard-action/keyboard-action.component";
import { EraseComponent } from "./erase/erase.component";
import { BarrageComponent } from "./barrage/barrage.component";
import { GravityComponent } from "./gravity/gravity.component";
import { MovingComponent } from "./moving/moving.component";

export const caseRoutes: Routes = [
  { path: "", redirectTo: "bouncing", pathMatch: "full" },
  { path: "bouncing", component: BouncingComponent, data: { name: "弹性与摩擦力" } },
  { path: "action", component: KeyboardActionComponent, data: { name: "速度与加速度" } },
  { path: "erase", component: EraseComponent, data: { name: "擦除效果" } },
  { path: "barrage", component: BarrageComponent, data: { name: "弹幕效果" } },
  { path: "gravity", component: GravityComponent, data: { name: "万有引力" } },
  { path: "moving", component: MovingComponent, data: { name: "移动物体" } },
];

@NgModule({
  imports: [RouterModule.forChild(caseRoutes)],
  exports: [RouterModule],
})
export class MCaseRoutingModule {}