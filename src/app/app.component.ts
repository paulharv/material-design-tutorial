import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-regulars2';
}

// This is not ideal - it should be in its own file but it wasn't working
@Component({
  selector: 'app-dialog-display',
  template: '<h2 matdialogTitle>Hi {{data.name}}</h2>' + 
  '<mat-dialog-content>This is not ideal</mat-dialog-content>' + 
  '<mat-dialog-actions>'+
  '<button mat-raised-button color="primary" mat-dialog-close="save">Save</button>'+
  '<button mat-raised-button mat-dialog-close="cancel">Cancel</button>'+
  '</mat-dialog-actions>',
  styles: []
})
export class DialogDisplayComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }
}
