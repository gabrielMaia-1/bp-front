import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ModalConfirmacaoData {
  titulo: string;
  mensagem: string;
}

@Component({
  selector: 'bp-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss']
})
export class ModalConfirmacaoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalConfirmacaoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ModalConfirmacaoData) { }

  ngOnInit(): void {
  }

}
