import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  steps = {}
  constructor() { }

  ngOnInit() {
  }

  isCompleted(step): boolean{
    return this.steps[step] != null;
  }

  setCompleted(step): void{
    this.steps[step]=true;
  }


}
