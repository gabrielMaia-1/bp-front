import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/core/api.service';
import { ModalConfirmacaoComponent } from 'src/app/shared/components/modal-confirmacao/modal-confirmacao.component';
import { MODAL_MD, ROUTE_COMBUSTIVEL } from 'src/app/shared/consts';
import { Combustivel } from 'src/app/shared/interfaces/Combustivel';
import { CombustivelModalComponent } from './combustivel-modal/combustivel-modal.component';

@Component({
  selector: 'bp-cad-combustivel',
  templateUrl: './cadastro-combustivel.component.html',
  styleUrls: ['./cadastro-combustivel.component.scss']
})
export class CadastroCombustivelComponent implements OnInit {

  @ViewChild(MatTable) matTable!: MatTable<Combustivel>;
  displayedColumns: string[] = ['id', 'posto', 'tipo', 'preco', 'action']
  combustiveis: Combustivel[] = [ ];

  constructor(public _dialog: MatDialog,
              public _api: ApiService) { }

  ngOnInit(): void {
    this._api.get<Combustivel[]>(ROUTE_COMBUSTIVEL)
    .subscribe(res => this.combustiveis = res);
  }

  editar(combustivel: Combustivel){
    this._dialog.open<CombustivelModalComponent, Combustivel, Combustivel>(CombustivelModalComponent, {
      data: combustivel
    }).afterClosed()
    .subscribe(res => {
      if(!res) return;
      combustivel.id = res.id;
      combustivel.posto = res.posto;
      combustivel.preco = res.preco;
      combustivel.tipo = res.tipo;
    })
  }

  adicionar(){
    this._dialog.open<CombustivelModalComponent, Combustivel, Combustivel>(CombustivelModalComponent)
    .afterClosed()
    .subscribe(res => {
      if(!res) return;
      this.combustiveis.push(res);
      this.matTable.renderRows();
    })
  }

  remover(combustivel: Combustivel){
    const callback = (comb: Combustivel) => {
      this._api.delete<Combustivel>(`${ROUTE_COMBUSTIVEL}/${comb.id}`).subscribe(res => {
        let ind = this.combustiveis.indexOf(comb);
        this.combustiveis.splice(ind, 1);
        this.matTable.renderRows();
      })
    }

    this._dialog.open<ModalConfirmacaoComponent, any, boolean>(ModalConfirmacaoComponent, {
      data: {
        titulo: 'Atenção!',
        mensagem: 'Voce tem certeza que deseja Excluir este registro'
      }
    }).afterClosed()
    .subscribe(res => {
      if(!res) return;
      callback(combustivel)
    })
  }
}
