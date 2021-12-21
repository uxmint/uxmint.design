import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-user-experience',
  templateUrl: './user-experience.component.html',
  styleUrls: ['./user-experience.component.scss']
})
export class UserExperienceComponent implements OnInit {
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
      img: './assets/images/works/Digital.png',
      title: 'Digital Transformation for telcom',
      sub: 'UX . UI . Mobile . B2B',
      url: '/work/networking'
    },
    { 
      img: './assets/images/works/Accomplishments.png',
      title: 'Repository of Accomplishments',
      sub: 'UX . UI . Web . B2C',
      url: '/work/construction-portal'
    }
  ];
  constructor(private title:Title, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.title.setTitle('Uxmint Design - Services');
  }

}
