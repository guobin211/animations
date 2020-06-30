import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const rootRoutes: Routes = [
  { path: "", redirectTo: "canvas", pathMatch: "full" },
  {
    path: "canvas",
    loadChildren: () => import("./m-canvas/m-canvas.module").then((m) => m.MCanvasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
