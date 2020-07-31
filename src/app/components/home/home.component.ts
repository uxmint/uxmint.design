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
      name: 'USER EXPERIENCE',
      icon: '/assets/images/home/icon-1.png',
      title: 'Empowering Products & Services with Design Driven solutions',
      description: '',
      image: '/assets/images/home/one.png',
      route: '/services/user-experience'
    },
    { 
      name: 'INTERFACE DESIGN',
      icon: '/assets/images/home/icon-2.png',
      title: 'Let the Brand Identity do the talking',
      description: '',
      image: '/assets/images/home/two.png',
      route: '/services/interface-design'
    },
    { 
      name: 'UI DEVELOPMENT',
      icon: '/assets/images/home/icon-3.png',
      title: 'Let the designs come alive with the best of UI technologies',
      description: '',
      image: '/assets/images/home/three.png',
      route: '/services/ui-dev'
    },
    { 
      name: 'END TO END DEVELOPMENT',
      icon: '/assets/images/home/icon-4.png',
      title: 'Seemless working product to ensure the users get hassle free experience',
      description: '',
      image: '/assets/images/home/four.png',
      route: '/services/end-to-end'
    },
    { 
      name: 'USABILITY TESTING',
      icon: '/assets/images/home/icon-5.png',
      title: 'Analyze, Priorities, Iterate before the market launch with real users',
      description: '  ',
      image: '/assets/images/home/five.png',
      route: '/services/usability-testing'
    }
  ];
  solutions:any[] = [
    { 
      title: 'EVENT MANAGEMENT',
      description: 'Platform for Venues Owners & Professionals to showcase their Venues and Services and find their customers online.',
      imageSrc: '/assets/images/projects/project1.png',
      link:{
        text: 'VIEW CASE STUDY',
        route: '/projects/event-management'
      }
    },
    { 
      title: 'SKILL DEVELOPMENT',
      description: 'Platform for designers, design aspirants/students, mentor to collaborate and share their ideology, design method, process and uplift their skills in the Design domain.',
      imageSrc: '/assets/images/projects/project3.png',
      link:{
        text: 'VIEW CASE STUDY',
        route: '/projects/skill-development'
      }
    },
    { 
      title: 'WE WORKED ON NETWORK SCALABILITY',
      description: 'Digital Transformation for one of the largest telecom network service provider involved redesigning the experience for customers, SMEs and business users...',
      imageSrc: '/assets/images/projects/project2.png',
      link:{
        text: 'VIEW CASE STUDY',
        route: '/projects/networking'
      }
    },
    { 
      title: 'SOCIAL MEDIA MARKETING',
      description: 'The SaaS product for Customer Advocacy platform to promoting word of mouth review for sustainable growth and to increase credibility.',
      imageSrc: '/assets/images/projects/project4.png',
      link:{
        text: 'VIEW CASE STUDY',
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