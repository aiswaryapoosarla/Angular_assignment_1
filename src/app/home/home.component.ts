import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user = {
      
       first_name:'Aiswarya',
       last_name:'Poosarla',
      role:'Web Developer',
   };
  

}
