import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Posto } from '../posto.component';
declare let L : any;


@Component({
  selector: 'bp-posto-detalhes',
  templateUrl: './posto-detalhes.component.html',
  styleUrls: ['./posto-detalhes.component.scss']
})
export class PostoDetalhesComponent implements OnInit, AfterViewInit {

  map: any;

  constructor(public dialogRef: MatDialogRef<PostoDetalhesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Posto) { }

  ngAfterViewInit(): void {

    // this.map = L.map('map', {
    // }).setView([this.data.lat,this.data.lng], 15);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);
    
    // L.marker([this.data.lat,this.data.lng], {draggable: true})
    // .addTo(this.map);

  }

  ngOnInit(): void {
  }



}
