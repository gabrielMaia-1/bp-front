import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroPostoComponent } from './posto/posto.component';
import { CadastroCombustivelComponent } from './combustivel/cadastro-combustivel.component';
import { CombustivelModalComponent } from './combustivel/combustivel-modal/combustivel-modal.component';
import { PostoModalComponent } from './posto/posto-modal/posto-modal.component';
import { PostoDetalhesComponent } from './posto/posto-detalhes/posto-detalhes.component';
import { TipoCombustivelComponent } from './tipo-combustivel/tipo-combustivel.component';
import { TipoCombustivelModalComponent } from './tipo-combustivel/tipo-combustivel-modal/tipo-combustivel-modal.component';


@NgModule({
  declarations: [
    CadastroComponent,
    CadastroPostoComponent,
    CadastroCombustivelComponent,
    CombustivelModalComponent,
    PostoModalComponent,
    PostoDetalhesComponent,
    TipoCombustivelComponent,
    TipoCombustivelModalComponent,
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    SharedModule,
    
  ]
})
export class CadastroModule { }
