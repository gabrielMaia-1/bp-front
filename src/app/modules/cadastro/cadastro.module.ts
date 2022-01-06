import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroPostoComponent } from './posto/posto.component';
import { CadastroCombustivelComponent } from './combustivel/cadastro-combustivel.component';
import { CombustivelModalComponent } from './combustivel/combustivel-modal/combustivel-modal.component';


@NgModule({
  declarations: [
    CadastroComponent,
    CadastroPostoComponent,
    CadastroCombustivelComponent,
    CombustivelModalComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    SharedModule
  ]
})
export class CadastroModule { }
