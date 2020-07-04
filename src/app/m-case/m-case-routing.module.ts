import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BouncingComponent } from "./bouncing/bouncing.component";


export const caseRoutes: Routes = [
  {path: "", redirectTo: "bouncing", pathMatch: "full"},
  {path: "bouncing", component: BouncingComponent, data: {name: "弹性与摩擦力"}}
];

@NgModule({
  imports: [RouterModule.forChild(caseRoutes)],
  exports: [RouterModule]
})
export class MCaseRoutingModule { }
