import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/api.service';
import { DEFAULT_INSERT_COMBUSTIVEL, ROUTE_COMBUSTIVEL, ROUTE_POSTO, ROUTE_TIPO_COMBUSTIVEL } from 'src/app/shared/consts';
import { Combustivel } from 'src/app/shared/interfaces/Combustivel';
import { Posto } from 'src/app/shared/interfaces/Posto';
import { TipoCombustivel } from 'src/app/shared/interfaces/TipoCombustivel';

@Component({
  selector: 'bp-combustivel-modal',
  templateUrl: './combustivel-modal.component.html',
  styleUrls: ['./combustivel-modal.component.scss']
})
export class CombustivelModalComponent implements OnInit {

  insert: boolean;
  postos = this._api.get<Posto[]>(ROUTE_POSTO);
  tipos = this._api.get<TipoCombustivel[]>(ROUTE_TIPO_COMBUSTIVEL);

  constructor(public _dialogRef: MatDialogRef<CombustivelModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Combustivel,
              private _api: ApiService) {
                this.insert = !data;
                if(this.insert) this.data = DEFAULT_INSERT_COMBUSTIVEL;
              }

  ngOnInit(): void {
  }

  salvar(form: FormGroup){
    form.markAllAsTouched()
    if(!form.valid) return;

    const method = this.insert ? this._api.post : this._api.put;
    const route = this.insert ? ROUTE_COMBUSTIVEL : `${ROUTE_COMBUSTIVEL}/${this.data.id}`

    method.call(this._api, route, form.getRawValue())
    .subscribe(res => this._dialogRef.close(res));
  }
}
