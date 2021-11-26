import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
      img: './assets/images/home/image3.png',
      title: 'Designing a successful product: Is not a daydream',
      sub: 'by Udaya Kumar Sivagurunathan'
    },
    { 
      img: './assets/images/home/image1.png',
      title: 'How to experience Five Senses — in Digital Commerce',
      sub: 'by Veera Thiruppal'
    },
    { 
      img: './assets/images/home/image2.png',
      title: 'Ever thought why does the colour green or sound of water brings calmness?',
      sub: 'by Krithika Thirunavukkarasu'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

}
