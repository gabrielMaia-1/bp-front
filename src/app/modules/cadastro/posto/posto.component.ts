import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacaoComponent } from 'src/app/shared/components/modal-confirmacao/modal-confirmacao.component';
import { MODAL_LG, MODAL_MD } from 'src/app/shared/consts';
import { PostoDetalhesComponent } from './posto-detalhes/posto-detalhes.component';
import { PostoModalComponent } from './posto-modal/posto-modal.component';

export interface Posto {
  id: number | null;
  nome: string | null;
  lat: number;
  lng: number;
}


@Component({
  selector: 'bp-cad-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.scss']
})
export class CadastroPostoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'localizacao', 'action']
  dataSource: Posto[] = [
    {id: 1, nome: 'santa gasoza', lat: -20.464412, lng: -54.618908}
  ];
  
  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editar(posto: Posto) {
    this._dialog.open(PostoModalComponent, {
      data: posto,
      ...MODAL_LG
    })
  }

  remover(id: number) {
    this._dialog.open(ModalConfirmacaoComponent, {
      data: {
        titulo: 'Atenção!',
        mensagem: 'Voce tem certeza que deseja Excluir este registro'
      }
    })
  }

  detalhes(posto: Posto){
    this._dialog.open(PostoDetalhesComponent, {
      data: posto,
      ...MODAL_MD
    })
  }

  adicionar(){
    let posto : Posto  = {id: null, nome: null, lat: -20.46477167905963, lng: -54.61623430252075};
    this._dialog.open(PostoModalComponent, {
      data: posto,
      ...MODAL_MD
    })
  }
}
