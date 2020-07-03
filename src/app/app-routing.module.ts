import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { PageAboutComponent } from "./shared/page-about/page-about.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const rootRoutes: Routes = [
  { path: "about", component: PageAboutComponent },
  {
    path: "canvas",
    loadChildren: () => import("./m-canvas/m-canvas.module").then((m) => m.MCanvasModule),
  },
  { path: "", redirectTo: "about", pathMatch: "full" },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
