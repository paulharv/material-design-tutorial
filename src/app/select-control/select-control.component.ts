import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

class Car{
  make: string;
  country: string;
}

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.css']
})
export class SelectControlComponent implements OnInit {

  selectedValue: string;
  selectedMultiValue: string;
  carsControl: FormControl = new FormControl();

  cars: Car[] = [
    {make:'Mazda', country:'Japan'},
    {make:'JEEP', country:'USA'},
    {make:'Audi', country:'Germany'},
    {make:'Jaguar', country:'England'}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
