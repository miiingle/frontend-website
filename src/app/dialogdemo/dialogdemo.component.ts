import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogContentComponent} from './dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialogdemo',
  templateUrl: './dialogdemo.component.html',
  styleUrls: ['./dialogdemo.component.scss']
})
export class DialogdemoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogContentComponent);
  }

}
