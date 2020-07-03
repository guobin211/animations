import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxCanvasModule } from "ngx-canvas";
import { NgxLocalModule, NgxLocalService } from "ngx-local";
import { NgxPrismModule } from "ngx-prism";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MyTabsComponent } from "./my-tabs/my-tabs.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { AutoCanvasComponent } from './auto-canvas/auto-canvas.component';

@NgModule({
  declarations: [SideNavComponent, MyTabsComponent, AutoCanvasComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxCanvasModule,
    NgxPrismModule,
    NgxLocalModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [NgxLocalService],
  exports: [
    NgxCanvasModule,
    NgxPrismModule,
    NgxLocalModule,
    SideNavComponent,
    MyTabsComponent,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
