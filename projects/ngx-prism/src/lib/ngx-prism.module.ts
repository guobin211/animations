import { NgModule } from "@angular/core";
import { NgxPrismComponent } from "./ngx-prism.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NgxPrismComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxPrismComponent],
})
export class NgxPrismModule {}
