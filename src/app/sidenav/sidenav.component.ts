import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  opened: boolean = false;
  mode: string;

  constructor() { }

  ngOnInit() {
  }

  setMode(mode: string): void{
    this.mode = mode;
    this.opened = (mode==='push' || mode==='over' || mode==='side');
  }

}
