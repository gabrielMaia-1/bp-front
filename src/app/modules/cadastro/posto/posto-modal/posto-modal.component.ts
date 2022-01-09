import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/api.service';
import { DEFAULT_INSERT_POSTO } from 'src/app/shared/consts';
import { Posto } from 'src/app/shared/interfaces/Posto';

declare let L : any;

@Component({
  selector: 'bp-posto-modal',
  templateUrl: './posto-modal.component.html',
  styleUrls: ['./posto-modal.component.scss']
})
export class PostoModalComponent implements OnInit, AfterViewInit {

  map: any;
  marker: any;
  insert: boolean;

  postoForm: FormGroup;

  constructor(public _dialogRef: MatDialogRef<PostoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Posto,
              private _fb: FormBuilder,
              private _api: ApiService) {
                this.insert = !data;
                if(this.insert) this.data = DEFAULT_INSERT_POSTO;

                this.postoForm = this._fb.group({
                  id: [{value: this.data.id, disabled: true}],
                  nome: [this.data.nome, [Validators.required, Validators.maxLength(96)]],
                  latitude: [{value: this.data.latitude, disabled: true}],
                  longitude: [{value: this.data.longitude, disabled: true}]
                });
              }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.map = L.map('map')
    .on('contextmenu', this.onContextMenu, this)
    .setView([this.data.latitude,this.data.longitude], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
    const marker = L.marker([this.data.latitude,this.data.longitude], {draggable: true})
    .on('dragend', this.onMarkerDragEnd, this)
    .addTo(this.map);

    this.marker = marker;
  }

  onContextMenu(event: any) {
    const latlng = event.latlng;
    console.log('context menu', latlng)
    this.setLocalizacao(latlng.lat, latlng.lng);
  }
  
  onMarkerDragEnd(event: any) {
    const latlng = event.target.getLatLng();
    this.setLocalizacao(latlng.lat, latlng.lng);
  }

  setLocalizacao(lat: number, lng: number){
    this.marker.setLatLng([lat, lng]);
    this.postoForm.controls['latitude'].setValue(lat);
    this.postoForm.controls['longitude'].setValue(lng);
  }

  salvar() {
    //validação
    this.postoForm.markAllAsTouched()
    if(!this.postoForm.valid) return;

    const method = this.insert ? this._api.post : this._api.put;
    const route = this.insert ? 'posto' : `posto/${this.data.id}`

    method.call(this._api, route, this.postoForm.getRawValue())
    .subscribe(res => this._dialogRef.close(res));
  }

}
