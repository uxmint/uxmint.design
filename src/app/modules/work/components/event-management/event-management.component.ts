import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {
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
      img: './assets/images/works/adapt 2.png',
      title: 'To adapt organic food as a Lifestyle',
      sub: 'UX . UI . Mobile . B2C'
    },
    { 
      img: './assets/images/works/designers.png',
      title: 'A designers platform for creative upskill',
      sub: 'UX . UI . Web . Mobile . B2C'
    },
    { 
      img: './assets/images/works/automobile.png',
      title: 'Automobile Usability Testing',
      sub: 'UX . UI . Web . Mobile . B2C'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

}
