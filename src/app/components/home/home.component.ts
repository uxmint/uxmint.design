import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
      sub: 'by Udaya Kumar Sivagurunathan',
      url: 'https://medium.com/uxmint/designing-a-successful-product-is-not-a-daydream-af92591078cd'
    },
    { 
      img: './assets/images/home/image1.png',
      title: 'How to experience Five Senses — in Digital Commerce',
      sub: 'by Veera Thiruppal',
      url: 'https://medium.com/uxmint/how-to-experience-five-senses-in-digital-commerce-463eadc5ad66'
    },
    { 
      img: './assets/images/home/image2.png',
      title: 'Ever thought why does the colour green or sound of water brings calmness?',
      sub: 'by Krithika Thirunavukkarasu',
      url: 'https://medium.com/uxmint/ever-thought-why-does-the-colour-green-or-sound-of-water-brings-calmness-6ecd72160fab'
    }
  ];

  testimonials: any[] = [
    { profile: './assets/images/home/logo2.svg'},
    { profile: './assets/images/home/logo4.svg'},
    { profile: './assets/images/home/logo6.svg'},
    { profile: './assets/images/home/logo5.svg'},
    { profile: './assets/images/home/logo3.svg'},
    { profile: './assets/images/home/logo1.svg'}  
    ];

  constructor(private cdr: ChangeDetectorRef, private title:Title, private meta:Meta, private modalService: NgbModal) { 
    this.title.setTitle('Uxmint Design');
    this.meta.addTags([
      {name: 'description', content: `Uxmint Design specialises in research based Experience Design (UX), Interface Design (UI), Branding and Product Ideation, Usability Testing and UI Development.` },
      {name: 'keywords', content: `UX consulting, ui/ux agency, user-centered design, product design, user experience, lean ux, agile ux, ux consultant, ui design company, design company, ui company, ux design company, ui ux company, user experience design agency, digital design agency, best design agency, ux design agency in india, ux ui design agencies, ui ux studio, uiux studio, ui studio, creative design studio, website design company, ux design company in india, best ux companies, ui ux design companies in chennai, top ux companies, top ux agencies, ux/ui contracting companies, top ux agency, best design agency, design partners, process improvement, UX Consultant`},
      { property: 'og:title', content: 'Uxmint Design' },
      { proprety: 'og:description', content: 'Uxmint Design specialises in research based Experience Design (UX), Interface Design (UI), Branding and Product Ideation, Usability Testing and UI Development.' },
      { property: 'og:image', content: 'assets/images/home/transformation.png' },
      { property: 'og:url', content: '' },
    ]);
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }
  
  openMenu(){
    this.modalService.open(HeaderComponent,{
      windowClass: 'menu'
    });
  }
}
