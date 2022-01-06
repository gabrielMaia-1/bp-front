import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MaterialModule } from './material/material.module';
import { ModalConfirmacaoComponent } from './components/modal-confirmacao/modal-confirmacao.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainNavComponent,
    ModalConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    MainNavComponent,
    MaterialModule,
    FormsModule
  ] 
})
export class SharedModule { }
