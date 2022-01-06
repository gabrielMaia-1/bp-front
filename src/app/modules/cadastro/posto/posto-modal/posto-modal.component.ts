import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Posto } from '../posto.component';

@Component({
  selector: 'bp-posto-modal',
  templateUrl: './posto-modal.component.html',
  styleUrls: ['./posto-modal.component.scss']
})
export class PostoModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PostoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Posto) { }

  ngOnInit(): void {
  }

}
