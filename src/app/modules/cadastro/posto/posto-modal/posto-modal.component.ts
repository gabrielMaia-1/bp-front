import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Posto } from '../posto.component';

declare let L : any;

@Component({
  selector: 'bp-posto-modal',
  templateUrl: './posto-modal.component.html',
  styleUrls: ['./posto-modal.component.scss']
})
export class PostoModalComponent implements OnInit, AfterViewInit {

  map: any;
  markers: any[] = [];

  postoForm = this._fb.group({
    id: [{value: null, disabled: true}],
    nome: ['', Validators.required],
    lat: [{value: this.data.lat, disabled: true}],
    lng: [{value: this.data.lng, disabled: true}]
  });

  constructor(public dialogRef: MatDialogRef<PostoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Posto,
              private _fb: FormBuilder) {
              }


  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.map = L.map('map')
    .on('contextmenu', this.onContextMenu, this)
    .setView([this.data.lat,this.data.lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
    const marker = L.marker([this.data.lat,this.data.lng], {draggable: true})
    .on('dragend', this.onMarkerDragEnd, this)
    .addTo(this.map);

    this.markers.push(marker);
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
    this.markers[0].setLatLng([lat, lng]);
    this.postoForm.controls['lat'].setValue(lat);
    this.postoForm.controls['lng'].setValue(lng);
  }

  salvar() {
    console.log(this.postoForm.getRawValue())
  }

}
