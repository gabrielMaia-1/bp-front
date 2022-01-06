import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
