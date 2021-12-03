import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-childcare-portal',
  templateUrl: './childcare-portal.component.html',
  styleUrls: ['./childcare-portal.component.scss']
})
export class ChildcarePortalComponent implements OnInit {

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
      img: './assets/images/works/Website.png',
      title: 'Website for Startup',
      sub: 'UX . UI . B2C'
    },
    { 
      img: './assets/images/works/designers.png',
      title: 'A designers platform for creative upskill',
      sub: 'UX . UI . Web . Mobile . B2C'
    },
    { 
      img: './assets/images/works/Digital.png',
      title: 'Digital Transformation for telcom',
      sub: 'UX . UI . Mobile . B2B'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
