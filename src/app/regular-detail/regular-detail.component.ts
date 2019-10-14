import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-regular-detail',
  templateUrl: './regular-detail.component.html',
  styleUrls: ['./regular-detail.component.css']
})
export class RegularDetailComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
