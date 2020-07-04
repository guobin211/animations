import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MCaseRoutingModule } from "./m-case-routing.module";
import { BouncingComponent } from "./bouncing/bouncing.component";
import { SharedModule } from "../shared/shared.module";
import { KeyboardActionComponent } from "./keyboard-action/keyboard-action.component";
import { EraseComponent } from "./erase/erase.component";

@NgModule({
  declarations: [BouncingComponent, KeyboardActionComponent, EraseComponent],
  imports: [CommonModule, SharedModule, MCaseRoutingModule],
})
export class MCaseModule {}
