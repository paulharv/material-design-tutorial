import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
 
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  options_old: string[] = ["Mazda", "Jeep", "Jaguar"];
  options = [
    {name:'Mazda'},
    {name:'Mercedes'},
    {name:'Jeep'},
    {name:'Jaguar'}
  ];
  
  myControl: FormControl = new FormControl();

  fnDisplay(opt){
    return opt.name ? opt.name : undefined;
  }

  constructor() { }

  ngOnInit() {
  }

}
