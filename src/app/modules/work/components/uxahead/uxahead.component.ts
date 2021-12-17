import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-uxahead',
  templateUrl: './uxahead.component.html',
  styleUrls: ['./uxahead.component.scss']
})
export class UxaheadComponent implements OnInit {

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
      img: './assets/images/works/automobile.png',
      title: 'Automobile Usability Testing',
      sub: 'UX . UI . Web . Mobile . B2C',
      url: '/work/automobile-usability'
    },
    { 
      img: './assets/images/works/child.png',
      title: 'Child Care Portal',
      sub: 'UX . UI . Tablet . B2C',
      url: '/work/childcare-portal'
    },
    { 
      img: './assets/images/works/event.png',
      title: 'Event Hosting made stressless',
      sub: 'UX . UI . Web . Mobile . B2C',
      url: '/work/event-management'
    }
  ];

  constructor(private cdr: ChangeDetectorRef, private title:Title) { }
  
        ngOnInit(): void {
        this.cdr.detectChanges();
        this.title.setTitle('Uxmint Design - Works');
        }

}
