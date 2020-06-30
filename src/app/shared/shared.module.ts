import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxCanvasModule } from "ngx-canvas";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxCanvasModule
  ],
  providers: [],
  exports: [NgxCanvasModule]
})
export class SharedModule { }
