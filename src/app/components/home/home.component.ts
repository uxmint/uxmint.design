import { Component, OnInit, AfterViewInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {

  servicesCarouselConfig:NguCarouselConfig = {
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
  solutionsCarouselConfig:NguCarouselConfig = {
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
  services:any[] = [
    { 
      name: 'UX Consulting',
      icon: '/assets/images/home/ux-consulting.png',
      title: 'Empowering Products & Services with Design Driven solutions',
      description: '',
      image: '/assets/images/home/img-1.png',
      route: '/services/ux-consulting'
    },
    { 
      name: 'Inteface Design',
      icon: '/assets/images/home/visual-design.png',
      title: 'Let the Brand Identity do the talking',
      description: '',
      image: '/assets/images/home/img-2.png',
      route: '/services/interface-design'
    },
    { 
      name: 'UI Development',
      icon: '/assets/images/home/front-end-development.png',
      title: 'Let the designs come alive with the best of UI technologies',
      description: '',
      image: '/assets/images/home/img-3.png',
      route: '/services/front-end-dev'
    },
    { 
      name: 'End-to-End Development',
      icon: '/assets/images/home/back-end-development.png',
      title: 'Seemless working product to ensure the users get hassle free experience',
      description: '',
      image: '/assets/images/home/img-4.png',
      route: '/services/back-end-dev'
    },
    { 
      name: 'Usability Testing',
      icon: '/assets/images/home/usability-testing.png',
      title: '',
      description: '  ',
      image: '/assets/images/home/img-5.png',
      route: '/services/usability-testing'
    }
  ];
  solutions:any[] = [
    { 
      title: 'Event Management',
      description: 'Portal for business (commercial network services for companies) with high level of scalability to have the services currently done manually.Portal for business (commercial network services for companies) with high level of scalability to have the services currently done manually.',
      imageSrc: '/assets/images/projects/project1.png',
      link:{
        text: 'View Case Study',
        route: '/projects/event-management'
      }
    },
    { 
      title: 'Skill Development',
      description: 'Portal for business (commercial network services for companies) with high level of scalability to have the services currently done manually.Portal for business (commercial network services for companies) with high level of scalability to have the services currently done manually.',
      imageSrc: '/assets/images/projects/project3.png',
      link:{
        text: 'View Case Study',
        route: '/projects/skill-development'
      }
    },
    { 
      title: 'We worked on Network Scalablity',
      description: 'Portal for business (commercial network services for companies) with high level of scalability to have the services currently done manually.Portal for business (commercial network services for companies) with high level of scalability to have the services currently done manually.',
      imageSrc: '/assets/images/projects/project2.png',
      link:{
        text: 'View Case Study',
        route: '/projects/networking'
      }
    },
    { 
      title: 'Social Media Marketing',
      description: 'Portal for business (commercial network services for companies) with high level of scalability to have the services currently done manually.Portal for business (commercial network services for companies) with high level of scalability to have the services currently done manually.',
      imageSrc: '/assets/images/projects/project4.png',
      link:{
        text: 'View Case Study',
        route: '/projects/social-review'
      }
    }
  ];


  constructor(private title:Title, private meta:Meta, private cd:ChangeDetectorRef) {
    this.title.setTitle('uxmint - UX & UI - Holistic Design Studio');
    this.meta.addTags([
      {name: 'description', content: `Holistic Design Studio with industry experts specialising in research based experience design (UX), user interface design (UI), branding and frontend development` },
      {name: 'keywords', content: `UX consulting, ui/ux agency, user-centered design, product design, user experience, lean ux, agile ux, ux consultant, ui design company, design company, ui company, ux design company, ui ux company, user experience design agency, digital design agency, best design agency, ux design agency in india, ux ui design agencies, ui ux studio, uiux studio, ui studio, creative design studio, website design company, ux design company in india, best ux companies, ui ux design companies in chennai, top ux companies, top ux agencies, ux/ui contracting companies, top ux agency, best design agency, design partners, process improvement, UX Consultant`}
    ]);
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.cd.detectChanges();
  }


}