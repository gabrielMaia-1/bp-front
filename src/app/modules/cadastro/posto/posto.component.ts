import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/core/api.service';
import { ModalConfirmacaoComponent } from 'src/app/shared/components/modal-confirmacao/modal-confirmacao.component';
import { MODAL_LG, MODAL_MD, ROUTE_POSTO } from 'src/app/shared/consts';
import { PostoDetalhesComponent } from './posto-detalhes/posto-detalhes.component';
import { PostoModalComponent } from './posto-modal/posto-modal.component';
import { Posto } from 'src/app/shared/interfaces/Posto'

@Component({
  selector: 'bp-cad-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.scss']
})
export class CadastroPostoComponent implements OnInit {
  @ViewChild(MatTable) matTable!: MatTable<Posto>;
  displayedColumns: string[] = ['id', 'nome', 'localizacao', 'action']
  postos: Posto[] = []
  
  constructor(public _dialog: MatDialog,
              public _api: ApiService) { }

  ngOnInit(): void {
    this._api.get<Posto[]>(ROUTE_POSTO).subscribe(res => {
      this.postos = res;
    })
  }

  editar(posto: Posto) {
    this._dialog.open<PostoModalComponent, Posto, Posto>(PostoModalComponent, {
      data: posto,
      ...MODAL_LG
    }).afterClosed()
    .subscribe(res => {
      if(!res) return;
      posto.nome = res.nome
      posto.id = res.id
      posto.latitude = res.latitude
      posto.longitude = res.longitude
    })
  }

  remover(posto: Posto) {

    const callback = (posto: Posto) => {
      this._api.delete<Posto>(`${ROUTE_POSTO}/${posto.id}`).subscribe(res => {
        let ind = this.postos.indexOf(posto);
        this.postos.splice(ind, 1);
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
      callback(posto)
    })
  }

  detalhes(posto: Posto){
    this._dialog.open(PostoDetalhesComponent, {
      data: posto,
      ...MODAL_MD
    })
  }

  adicionar(){
    this._dialog.open<PostoModalComponent, Posto, Posto>(PostoModalComponent, { ...MODAL_MD})
    .afterClosed()
    .subscribe(res => {
      if(!res) return;
      this.postos.push(res);
      this.matTable.renderRows();
    })
  }
}
