import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
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

}
