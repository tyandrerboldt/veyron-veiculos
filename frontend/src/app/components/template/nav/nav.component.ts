import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  show:boolean

  constructor() { 
    this.show = true
  }

  ngOnInit(): void {
  }

  toggle(){
    this.show = !this.show
  }

}
