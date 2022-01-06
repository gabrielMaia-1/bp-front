import { Component, OnInit } from '@angular/core';

export interface Posto {
  id: number;
  nome: string;
  lat: number;
  lon: number;
}


@Component({
  selector: 'bp-cad-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.scss']
})
export class CadastroPostoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'localizacao', 'action']
  dataSource: Posto[] = [
    {id: 1, nome: 'santa gasoza', lat: 12.0, lon: -123.423}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
