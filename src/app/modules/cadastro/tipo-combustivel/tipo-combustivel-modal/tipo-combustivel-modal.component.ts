import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/api.service';
import { DEFAULT_INSERT_TIPO_COMBUSTIVEL, ROUTE_TIPO_COMBUSTIVEL } from 'src/app/shared/consts';
import { TipoCombustivel } from 'src/app/shared/interfaces/TipoCombustivel';

@Component({
  selector: 'bp-tipo-combustivel-modal',
  templateUrl: './tipo-combustivel-modal.component.html',
  styleUrls: ['./tipo-combustivel-modal.component.scss']
})
export class TipoCombustivelModalComponent implements OnInit {

  @ViewChild(NgForm,{static: true}) form!: FormGroup;
  insert: boolean;

  constructor(public _dialogRef: MatDialogRef<TipoCombustivelModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: TipoCombustivel,
              private _api: ApiService) {
                console.log(data)
                this.insert = !data;
                if(this.insert) this.data = DEFAULT_INSERT_TIPO_COMBUSTIVEL;
              }
  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  }
  
  salvar(form: FormGroup){
    form.markAllAsTouched()
    if(!form.valid) return;

    const method = this.insert ? this._api.post : this._api.put;
    const route = this.insert ? ROUTE_TIPO_COMBUSTIVEL : `${ROUTE_TIPO_COMBUSTIVEL}/${this.data.id}`

    method.call(this._api, route, form.getRawValue())
    .subscribe(res => this._dialogRef.close(res));
  }
}
