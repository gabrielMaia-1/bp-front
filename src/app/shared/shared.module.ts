import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MainNavComponent,
    MaterialModule
  ] 
})
export class SharedModule { }
