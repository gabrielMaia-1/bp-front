import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/core/api.service';
import { ModalConfirmacaoComponent } from 'src/app/shared/components/modal-confirmacao/modal-confirmacao.component';
import { ROUTE_TIPO_COMBUSTIVEL } from 'src/app/shared/consts';
import { TipoCombustivel } from 'src/app/shared/interfaces/TipoCombustivel';
import { TipoCombustivelModalComponent } from './tipo-combustivel-modal/tipo-combustivel-modal.component';

@Component({
  selector: 'bp-cad-tipo-combustivel',
  templateUrl: './tipo-combustivel.component.html',
  styleUrls: ['./tipo-combustivel.component.scss']
})
export class TipoCombustivelComponent implements OnInit {

  @ViewChild(MatTable) matTable!: MatTable<TipoCombustivel>;
  displayedColumns: string[] = ['id', 'nome', 'aditivado', 'action']
  tipos: TipoCombustivel[] = []

  constructor(public _dialog: MatDialog,
              public _api: ApiService) { }

  ngOnInit(): void {
    this._api.get<TipoCombustivel[]>(ROUTE_TIPO_COMBUSTIVEL).subscribe(res => {
      this.tipos = res;
    })
  }


  editar(tipo: TipoCombustivel){
    this._dialog.open<TipoCombustivelModalComponent, TipoCombustivel, TipoCombustivel>(TipoCombustivelModalComponent, {
      data: tipo
    }).afterClosed()
    .subscribe(res => {
      if(!res) return;
      tipo.id = res.id;
      tipo.nome = res.nome;
      tipo.aditivado = res.aditivado;
    })
  }

  adicionar(){
    this._dialog.open<TipoCombustivelModalComponent, TipoCombustivel, TipoCombustivel>(TipoCombustivelModalComponent)
    .afterClosed()
    .subscribe(res => {
      if(!res) return;
      this.tipos.push(res);
      this.matTable.renderRows();
    })
  }

  remover(tipo: TipoCombustivel){
    const callback = (comb: TipoCombustivel) => {
      this._api.delete<TipoCombustivel>(`${ROUTE_TIPO_COMBUSTIVEL}/${comb.id}`).subscribe(res => {
        let ind = this.tipos.indexOf(comb);
        this.tipos.splice(ind, 1);
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
      callback(tipo)
    })
  }
}