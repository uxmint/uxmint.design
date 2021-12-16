import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

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

  otherCaseStudies:any[] = [
    { 
      img: './assets/images/works/child.png',
      title: 'Child Care Portal',
      sub: 'UX . UI . Tablet . B2C'
    },
    { 
      img: './assets/images/works/Website.png',
      title: 'Website for Startup',
      sub: 'UX . UI . B2C'
    },
    { 
      img: './assets/images/works/event.png',
      title: 'Event Hosting made stressless',
      sub: 'UX . UI . Web . Mobile . B2C'
    }
  ];

  constructor(private cdr: ChangeDetectorRef, private title:Title) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.title.setTitle('Uxmint Design - Works');
  }

}
