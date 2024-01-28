import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    about:'I am a passionate web developer diving into the exciting world of creating awesome web applications using Angular.I thrive on turning ideas into reality through code. My journey started with a fascination for the seamless and dynamic user experiences that modern web applications offer. Angular, with its powerful framework and robust features,became my tool of choice.I am enthusiastic about tackling new challenges and contributing to the ever-evolving web development landscape.',
};

}



