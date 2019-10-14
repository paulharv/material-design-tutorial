import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date();
  

  constructor() { 
    this.setMaxDate(4);
  }

  ngOnInit() {
  }

  setMaxDate = daysFromToday => {
    this.maxDate.setDate(this.maxDate.getDate() + daysFromToday); 
  }

  filterDate = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

}
