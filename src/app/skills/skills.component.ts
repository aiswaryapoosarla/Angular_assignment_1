import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentSelected = 0;
  skills = [
    { id: 1, name: 'Angular'},
    { id: 2, name: 'C Sharp'},
    { id: 3, name: '.NET'},
    { id: 4, name: 'SQL'},
    { id: 5, name: 'Azure CLoud'},
  ];


}
