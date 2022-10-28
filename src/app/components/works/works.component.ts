import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  worksLeft: any[] = [
    {
      title: 'Digital Transformation for Telcom',
      desc: 'UX . UI . Mobile . B2B',
      url: '/work/networking',
      image: '/assets/images/works/network1.webp'
    },
    
    {
      title: 'To adapt organic food as a Lifestyle',
      desc: 'UX . UI . web . Mobile .B2C',
      url: '/work/health-care',
      image: '/assets/images/works/works3.png'
    },
    {
      title: 'A designers platform for creative upskill',
      desc: 'UX . UI . Mobile . Web . B2C',
      url: '/work/skill-development',
      image: '/assets/images/works/works5.webp'
    },
    {
      title: 'A Customer Advocacy Platform',
      desc: 'UX . UI . Web . B2B2C',
      url: '/work/marketing',
      image: '/assets/images/works/market1.webp'
    },
    {
      title: 'Automobile Usability Testing',
      desc: 'UX . UI . Web .Mobile . B2C',
      url: '/work/automobile-usability',
      image: '/assets/images/works/works8.png'
    }
  ]
  worksRight: any[] = [
    {
      title: 'Event Hosting made stressless',
      desc: 'UX . UI . Web . Mobile . B2C',
      url: '/work/event-management',
      image: '/assets/images/works/works2.png'
    },
    {
      title: 'Website for Startup',
      desc: 'UX . UI . B2C',
      url: '/work/uxahead',
      image: '/assets/images/works/works4.png'
    },
    {
      title: 'Child Care Portal',
      desc: 'UX . UI . Mobile . Web . B2C',
      url: '/work/childcare-portal',
      image: '/assets/images/works/works6.png'
    },
    {
      title: 'Repository of Accomplishments',
      desc: 'UX . UI . Web . B2C',
      url: '/work/construction-portal',
      image: '/assets/images/works/works9.png'
    }
  ]

  constructor(private title: Title, private meta: Meta, private modalService: NgbModal) { 
    this.title.setTitle('Uxmint Design  -  Our Works & Case Studies');
    this.meta.addTags([
      {name: 'description', content: `We have worked with companies in their stage of incubation, revival & next leap; take your next leap in design with us. Our expertise spans across Enterprise Application Design, Product Design, Android & iOS Design, Content Websites.` },
      {name: 'keywords', content: `Portfolio, UX portfolio, UI  portfolio, Sify, networking, business solution, enterprise application design, designing enterprise app, bigfday, sughavazhvu healthcare, healthcare, events management, referralyogi, SaaS, supply chain, mobile app design, responsive web design, website design, ux app, mobile ux, interface design, ui mobile, ios ui design, ui designing, ui/ux, ui and ux design, app ui design, mobile app ui design, mobile ui design, mobile ux design, web ui design, mobile design, best mobile sites, android ui design, iOS design, mobile ux design samples, best ui designs, good ux design, design india`},
      { property: 'og:title', content: 'Our Works & Case Studies' },
      { proprety: 'og:description', content: 'We have worked with companies in their stage of incubation, revival & next leap; take your next leap in design with us. Our expertise spans across Enterprise Application Design, Product Design, Android & iOS Design, Content Websites.' },
      { property: 'og:image', content: 'https://ia.media-imdb.com/images/rock.jpg' },
      { property: 'og:url', content: 'work' },
    ]);
  }

  ngOnInit(): void {
  }

  openMenu(){
    this.modalService.open(HeaderComponent,{
      windowClass: 'menu'
    });
  }

}
