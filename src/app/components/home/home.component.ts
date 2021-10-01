import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  active = 1;

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
      img: './assets/images/services/image1.png',
      title: 'Designing a successful product: Is not a daydream',
      sub: 'by Udaya Kumar Sivagurunathan'
    },
    { 
      img: './assets/images/services/image2.png',
      title: 'Even thought why does the colour green or sound...',
      sub: 'by Krithika Thirunavukkarasu'
    }
  ];

  worksCarouselConfig:NguCarouselConfig = {
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

  works:any[] = [
    { 
      img: './assets/images/home/digital-tranformation.png',
      title: 'Digital Transformation for Telcom',
      link: '/'
    },
    { 
      img: './assets/images/home/digital-tranformation.png',
      title: 'Event Hosting made stressless',
      link: '/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
