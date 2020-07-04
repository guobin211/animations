import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MCaseRoutingModule } from './m-case-routing.module';
import { BouncingComponent } from "./bouncing/bouncing.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [BouncingComponent],
  imports: [
    CommonModule,
    SharedModule,
    MCaseRoutingModule,
  ]
})
export class MCaseModule { }
