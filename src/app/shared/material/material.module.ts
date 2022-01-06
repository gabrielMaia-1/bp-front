import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
  exports:[
    ...material
  ]
})
export class MaterialModule { }
