import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/app/components/header/header.component';

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
      sub: '',
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

  constructor(private cdr: ChangeDetectorRef, private title:Title, private meta:Meta, private modalService: NgbModal) { }
  
        ngOnInit(): void {
        this.cdr.detectChanges();
        this.title.setTitle('Uxmint Design - Works');
        this.meta.addTags([
          {name: 'description', content: `We have worked with companies in their stage of incubation, revival & next leap; take your next leap in design with us. Our expertise spans across Enterprise Application Design, Product Design, Android & iOS Design, Content Websites.` },
          {name: 'keywords', content: `Portfolio, UX portfolio, UI  portfolio, Sify, networking, business solution, enterprise application design, designing enterprise app, bigfday, sughavazhvu healthcare, healthcare, events management, referralyogi, SaaS, supply chain, mobile app design, responsive web design, website design, ux app, mobile ux, interface design, ui mobile, ios ui design, ui designing, ui/ux, ui and ux design, app ui design, mobile app ui design, mobile ui design, mobile ux design, web ui design, mobile design, best mobile sites, android ui design, iOS design, mobile ux design samples, best ui designs, good ux design, design india`}
        ]);
        }
        openMenu(){
          this.modalService.open(HeaderComponent,{
            windowClass: 'menu'
          });
        }
}
