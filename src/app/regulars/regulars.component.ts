import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../mock-people';
import { Person } from '../person';

@Component({
  selector: 'app-regulars',
  templateUrl: './regulars.component.html',
  styleUrls: ['./regulars.component.css']
})
export class RegularsComponent implements OnInit {
  people: Person[] = PEOPLE;

  constructor() { }

  ngOnInit() {
  }

  person: Person;
  selectPerson(person: Person): void{
    this.person = person;
  }

}
