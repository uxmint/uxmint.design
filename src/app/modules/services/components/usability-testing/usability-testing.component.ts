import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselConfig } from '@ngu/carousel';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-usability-testing',
  templateUrl: './usability-testing.component.html',
  styleUrls: ['./usability-testing.component.scss']
})
export class UsabilityTestingComponent implements OnInit {
  active2 = 'discussion';
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
      img: './assets/images/works/automobile.png',
      title: 'Automobile Usability Testing',
      sub: '',
      url: '/work/automobile-usability'
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
  testimonials: any[] = [
    {  description: ' - End users are not using the product in the way it was intended to be used ? '},
    {  description: ' - Unsure of why the users are dropping off the product & For Assurance'},
    {  description: ' - Mapping the category of users to the designed features'},
    {  description: ' - Explore focus areas of the product'},
    {  description: ' - Analyze how usable is the product in the context of usage'},
    {  description: ' - Risk reduction in usability before the launch of the product'},
    {  description: ' - Not sure which option of design will be beneficial'},
    {  description: ' - To get an understanding of users mental model'}    
    ];
    openMenu(){
      this.modalService.open(HeaderComponent,{
        windowClass: 'menu'
      });
    }
}
