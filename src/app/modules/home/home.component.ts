import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { LOC_DEFAULT, ROUTE_POSTO, ROUTE_TIPO_COMBUSTIVEL } from 'src/app/shared/consts';
import { Posto } from 'src/app/shared/interfaces/Posto';
import { TipoCombustivel } from 'src/app/shared/interfaces/TipoCombustivel';

declare let L : any;

@Component({
  selector: 'bp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  map: any;
  localizacao: any;
  markersLayer = new L.layerGroup();
  tipos = this._api.get<TipoCombustivel[]>(ROUTE_TIPO_COMBUSTIVEL);

  constructor(public _api: ApiService) { }

  ngOnInit(): void {
    this._api.get<Posto[]>(ROUTE_POSTO)
    .subscribe(res => {
      console.log(res);
      this.updateMarkers(res);
    })
  }

  updateMarkers(res: Posto[]) {
    this.markersLayer.clearLayers();
    this.markersLayer.addLayer(this.localizacao);
    res.forEach(p => {
      const marker = L.marker([p.latitude,p.longitude]);
      this.markersLayer.addLayer(marker)
    });
  }

  ngAfterViewInit(): void {
    this.map = L.map('map')
    .on('contextmenu', this.onContextMenu, this)
    .setView([LOC_DEFAULT[0], LOC_DEFAULT[1]], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.localizacao = L.marker([LOC_DEFAULT[0], LOC_DEFAULT[1]], { draggable: true})
      .on('dragend', this.moveLocalizacao, this);
      
    this.markersLayer.addLayer(this.localizacao);
    
    this.markersLayer.addTo(this.map);
  }

  onContextMenu(event: any) {
    const latlng = event.latlng;
    this.localizacao.setLatLng([latlng.lat, latlng.lng]);
  }

  moveLocalizacao(event: any) {
    const latlng = event.target.getLatLng();
    this.localizacao.setLatLng([latlng.lat, latlng.lng]);
  }

}