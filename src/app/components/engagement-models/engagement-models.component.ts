import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Title } from '@angular/platform-browser';

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

  works:any[] = [
    { 
      title: 'Fixed Bid',
      sub: 'The fixed bid model suites best for projects with defined scope and defined requirement specification. The timeline and effort can be estimated based on the scope or work. Any changes or enhancements not part of the scope would be taken as part of Change Requests with separate estimates.',
      img: './assets/images/services/logo-7.svg',
      subject: 'Clear scope definition and documented requirements',
      imge: './assets/images/services/logo-8.svg',
      subjects: 'Fits for small and medium projects',
      imges: './assets/images/services/logo-9.svg',
      cost: 'No interim changes',
      logo: './assets/images/services/logo-10.svg',
      definition: 'Cost efficient for small projects with limited budget',

    },
    { 
      title: 'Time & Material',
      sub: 'The time & material model are cost efficient for complex projects that are dynamic this suites best. Our team is flexible to handle changes and accommodate the product needs. The cost is billed based on the total team effort in hours involved in the project. The billing is done on monthly basis.',
      imge: './assets/images/services/logo-7.svg',
      subjects: 'Highly suitable for product driven design and enterprise projects',
      imges: './assets/images/services/logo-8.svg',
      cost: ' Allows better flexibility for changing design directions',
      logo: './assets/images/services/logo-9.svg',
      definition: 'Transparent billing and full control over time and budget',
    },
    { 
      title: 'Dedicated Team Model',
      sub: 'Want our design team to join force with the internal business & development? We are in! This works best for long term complex and consistent projects that demand design team to understand the domain and work inline with the business team.',
      imge: './assets/images/services/logo-7.svg',
      subjects: 'Skilled and experienced design team',
      imges: './assets/images/services/logo-8.svg',
      cost: 'Reduces in-house cost on hiring skilled resources',
      logo: './assets/images/services/logo-9.svg',
      definition: ' Team be scaled-up with very less notice',
    },
    { 
      title: 'Staff Augmentation Model',
      sub: 'Need to leverage your existing design team? Our design experts can loop in to design along with your internal team. This work best when there is need for business to ramp up without much of time to train new hires. The billing can be done on monthly basis. ',
      imge: './assets/images/services/logo-7.svg',
      subjects: 'Reduces time to hire and train',
      imges: './assets/images/services/logo-8.svg',
      cost: 'Skilled and experienced designers',
      logo: './assets/images/services/logo-9.svg',
      definition: 'Reduces in-house cost on hiring full-time resources',
    }
  ];

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Engagement Models');
  }

}
