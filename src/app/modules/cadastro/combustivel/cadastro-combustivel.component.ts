import { Component, OnInit } from '@angular/core';


export interface Combustivel {
  id: number;
  postoId: number;
  nome: string;
  preco: number;
}

@Component({
  selector: 'bp-cad-combustivel',
  templateUrl: './cadastro-combustivel.component.html',
  styleUrls: ['./cadastro-combustivel.component.scss']
})
export class CadastroCombustivelComponent implements OnInit {

  displayedColumns: string[] = ['id', 'posto-id', 'nome', 'preco', 'action']
  dataSource: Combustivel[] = [
    {id: 1, postoId: 1, nome: 'santa gasoza', preco: 12.0}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
