import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { DialogDisplayComponent } from '../app.component'; // Struggled to get this working, but DialogDisplayComponent is defined here, and declared app.module

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  /*
    This got a bit crazy. This DialogComponent needs _another_ component to actually display the dialog - 
    that's DialogDisplayComponent passed in below
  */
  openDialog = () => {
    var ref = this.dialog.open(DialogDisplayComponent, {data: {name:'Paul'}});
    ref.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

}


