import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselConfig } from '@ngu/carousel';
import { HeaderComponent } from 'src/app/components/header/header.component';

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
  constructor(private title:Title, private cdr: ChangeDetectorRef, private meta:Meta, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.title.setTitle('Uxmint Design - Services');
    this.meta.addTags([
      {name: 'description', content: `Enhance your product with the right strategy. Our team of design experts can help you in Customer Experience, Strategy Design, Product Ideation, Branding, Interface Design, Usability Testing.` },
      {name: 'keywords', content: `Research, Personas, Task Analysis, Site Architecture, Wireframing, Interaction, Mood board, UI Design, Usability Testing, User Architecture, User Flow, Interviews, Sketching, Focus Groups, Lean UX, Agile Process, user experience research, ux process, user interface, usability, user interface design, usability testing, ux design labs, Digital Design Agency, UX Consultant`}
    ]);
  }
  openMenu(){
    this.modalService.open(HeaderComponent,{
      windowClass: 'menu'
    });
  }
}
