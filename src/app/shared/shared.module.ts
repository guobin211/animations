import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxCanvasModule, NgxCanvasService } from "ngx-canvas";
import { NgxLocalService } from "ngx-local";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxCanvasModule,
  ],
  providers: [
    NgxCanvasService,
    NgxLocalService,
  ],
  exports: [NgxCanvasModule]
})
export class SharedModule {
}
