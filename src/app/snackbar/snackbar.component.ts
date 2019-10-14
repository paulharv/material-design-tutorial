import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar = (msg, action) => {
    var snackbarRef = this.snackBar.open(msg, action, {duration:2000});
    snackbarRef.afterDismissed().subscribe(() => console.log('The Snackbar was Dismissed'))
  }

}
