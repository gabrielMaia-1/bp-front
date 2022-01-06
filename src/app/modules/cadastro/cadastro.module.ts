import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroPostoComponent } from './posto/posto.component';
import { CadastroCombustivelComponent } from './combustivel/cadastro-combustivel.component';
import { CombustivelModalComponent } from './combustivel/combustivel-modal/combustivel-modal.component';
import { PostoModalComponent } from './posto/posto-modal/posto-modal.component';


@NgModule({
  declarations: [
    CadastroComponent,
    CadastroPostoComponent,
    CadastroCombustivelComponent,
    CombustivelModalComponent,
    PostoModalComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    SharedModule
  ]
})
export class CadastroModule { }
