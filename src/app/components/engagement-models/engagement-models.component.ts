import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-engagement-models',
  templateUrl: './engagement-models.component.html',
  styleUrls: ['./engagement-models.component.scss']
})
export class EngagementModelsComponent implements OnInit {
  active = '1';
  activeIds = 'static-1';

  worksCarouselConfig:NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 600,
    interval: {
      timing: 6000,
      initialDelay: 2000
    },
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    loop: true
  };

  works:any[] = [
    { 
      title: 'Fixed Bid',
      sub: 'The fixed bid model suites best for projects with defined scope and defined requirement specification. The timeline and effort can be estimated based on the scope or work. Any changes or enhancements not part of the scope would be taken as part of Change Requests with separate estimates.',
      subject: '- Clear scope definition and documented requirements',
      subjects: '- Fits for small and medium projects',
      cost: '- No interim changes',
      definition: '- Cost efficient for small projects with limited budget',

    },
    { 
      title: 'Time & Material',
      sub: 'The time & material model are cost efficient for complex projects that are dynamic this suites best. Our team is flexible to handle changes and accommodate the product needs. The cost is billed based on the total team effort in hours involved in the project. The billing is done on monthly basis.',
      subjects: '- Highly suitable for product driven design and enterprise projects',
      cost: '- Allows better flexibility for changing design directions',
      definition: '- Transparent billing and full control over time and budget',
    },
    { 
      title: 'Dedicated Team Model',
      sub: 'Want our design team to join force with the internal business & development? We are in! This works best for long term complex and consistent projects that demand design team to understand the domain and work inline with the business team.',
      subjects: '- Skilled and experienced design team',
      cost: '- Reduces in-house cost on hiring skilled resources',
      definition: '- Team be scaled-up with very less notice',
    },
    { 
      title: 'Staff Augmentation Model',
      sub: 'Need to leverage your existing design team? Our design experts can loop in to design along with your internal team. This work best when there is need for business to ramp up without much of time to train new hires. The billing can be done on monthly basis. ',
      subjects: '- Reduces time to hire and train',
      cost: '- Skilled and experienced designers',
      definition: '- Reduces in-house cost on hiring full-time resources',
    }
  ];

  constructor(private title:Title, private cdr: ChangeDetectorRef, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.title.setTitle('Uxmint Design - Engagement Models');
  }

  openMenu(){
    this.modalService.open(HeaderComponent,{
      windowClass: 'menu'
    });
  }

}
