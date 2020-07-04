import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MCaseRoutingModule } from "./m-case-routing.module";
import { BouncingComponent } from "./bouncing/bouncing.component";
import { SharedModule } from "../shared/shared.module";
import { KeyboardActionComponent } from "./keyboard-action/keyboard-action.component";
import { EraseComponent } from "./erase/erase.component";
import { BarrageComponent } from "./barrage/barrage.component";
import { GravityComponent } from "./gravity/gravity.component";
import { MovingComponent } from "./moving/moving.component";

@NgModule({
  declarations: [
    BouncingComponent,
    KeyboardActionComponent,
    EraseComponent,
    BarrageComponent,
    GravityComponent,
    MovingComponent,
  ],
  imports: [CommonModule, SharedModule, MCaseRoutingModule],
})
export class MCaseModule {}
