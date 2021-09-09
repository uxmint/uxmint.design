import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-automobile-usability',
  templateUrl: './automobile-usability.component.html',
  styleUrls: ['./automobile-usability.component.scss']
})
export class AutomobileUsabilityComponent implements OnInit {

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
    },
    { 
      img: './assets/images/services/image1.png',
      title: 'Designing a successful product: Is not a daydream',
      sub: 'by Udaya Kumar Sivagurunathan'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
