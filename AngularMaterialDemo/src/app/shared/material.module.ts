import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
