import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacaoComponent } from 'src/app/shared/components/modal-confirmacao/modal-confirmacao.component';
import { PostoModalComponent } from './posto-modal/posto-modal.component';

export interface Posto {
  id: number;
  nome: string;
  lat: number;
  lon: number;
}


@Component({
  selector: 'bp-cad-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.scss']
})
export class CadastroPostoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'localizacao', 'action']
  dataSource: Posto[] = [
    {id: 1, nome: 'santa gasoza', lat: 12.0, lon: -123.423}
  ];

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editar(posto: Posto) {
    this._dialog.open(PostoModalComponent, {
      data: posto
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
}
