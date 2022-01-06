import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Combustivel } from '../cadastro-combustivel.component';

@Component({
  selector: 'bp-combustivel-modal',
  templateUrl: './combustivel-modal.component.html',
  styleUrls: ['./combustivel-modal.component.scss']
})
export class CombustivelModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CombustivelModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Combustivel) { }

  ngOnInit(): void {
  }

  salvar(data: any){

  }
}
