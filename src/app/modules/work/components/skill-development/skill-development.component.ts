import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-skill-development',
  templateUrl: './skill-development.component.html',
  styleUrls: ['./skill-development.component.scss']
})
export class SkillDevelopmentComponent implements OnInit {

  blogsCarouselConfig:NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    interval: {
      timing: 4000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    loop: true
  };

  blogs:any[] = [
    { 
      img: './assets/images/works/adapt 2.png',
      title: 'To adapt organic food as a Lifestyle',
      sub: 'UX . UI . Mobile . B2C'
    },
    { 
      img: './assets/images/works/customer.png',
      title: 'A Customer Advocacy Platform',
      sub: 'UX . UI . Web . Mobile . B2C'
    },
     { 
      img: './assets/images/works/Accomplishments.png',
      title: 'Repository of Accomplishments',
      sub: 'UX . UI . Web . B2C'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
