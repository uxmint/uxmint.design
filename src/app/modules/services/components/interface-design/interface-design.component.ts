import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-interface-design',
  templateUrl: './interface-design.component.html',
  styleUrls: ['./interface-design.component.scss']
})
export class InterfaceDesignComponent implements OnInit {
  active = 'discussion';
  activeIds = 'static-1';
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
      img: './assets/images/works/event.png',
      title: 'Event Hosting made stressless',
      sub: 'UX . UI . Web . Mobile . B2C',
      url: '/work/event-management'
    },
    { 
      img: './assets/images/works/adapt 2.png',
      title: 'To adapt organic food as a Lifestyle',
      sub: 'UX . UI . Mobile . B2C',
      url: '/work/health-care'
    },
    { 
      img: './assets/images/works/customer.png',
      title: 'A Customer Advocacy Platform',
      sub: 'UX . UI . Web . Mobile . B2C',
      url: '/work/marketing'
    }
  ];
  constructor(private title:Title, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.title.setTitle('Uxmint Design - Services');
  }

}
