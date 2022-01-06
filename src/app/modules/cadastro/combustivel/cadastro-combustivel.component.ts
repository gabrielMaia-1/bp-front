import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacaoComponent } from 'src/app/shared/components/modal-confirmacao/modal-confirmacao.component';
import { CombustivelModalComponent } from './combustivel-modal/combustivel-modal.component';


export interface Combustivel {
  id: number;
  idPosto: number;
  nome: string;
  preco: number;
}

@Component({
  selector: 'bp-cad-combustivel',
  templateUrl: './cadastro-combustivel.component.html',
  styleUrls: ['./cadastro-combustivel.component.scss']
})
export class CadastroCombustivelComponent implements OnInit {

  displayedColumns: string[] = ['id', 'posto-id', 'nome', 'preco', 'action']
  dataSource: Combustivel[] = [
    {id: 1, idPosto: 1, nome: 'santa gasoza', preco: 12.0}
  ];

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }
  editar(combustivel: Combustivel){
    this._dialog.open(CombustivelModalComponent, {
      data: combustivel
    })
  }
  remover(id: number){
    this._dialog.open(ModalConfirmacaoComponent, {
      data: {
        titulo: 'Atenção!',
        mensagem: 'Voce tem certeza que deseja Excluir este registro'
      }
    })
  }
}
