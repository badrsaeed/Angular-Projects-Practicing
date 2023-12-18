import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsComponent } from './buttons/buttons.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';


import { DemoRoutingModule } from './demo-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    ButtonsComponent,
    FlexBoxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule, FormsModule,
  ]
})
export class DemoModule { }
