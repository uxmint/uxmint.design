import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-ui-development',
  templateUrl: './ui-development.component.html',
  styleUrls: ['./ui-development.component.scss']
})
export class UiDevelopmentComponent implements OnInit {
  active = 'discussion';
  activeIds = 'static-1';
  active2 = 'code-repository';
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
      img: './assets/images/works/designers.png',
      title: 'A designers platform for creative upskill',
      sub: 'UX . UI . Web . Mobile . B2C',
      url: '/work/skill-development'
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
