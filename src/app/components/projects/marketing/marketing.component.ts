import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
    this.title.setTitle('uxmint -  Case Studies - SaaS Product');
    this.meta.addTags([
      {name: 'description', content: `The SaaS product for Customer Advocacy platform to promoting word of mouth review for sustainable growth and to increase credibility.` },
      {name: 'keywords', content: `Portfolio, UX portfolio, UI  portfolio, ReferralYogi, SaaS, component design, service design, business solution, responsive web design, website design, ux app, mobile ux, interface design, ui mobile, ios ui design, ui designing, ui/ux, ui and ux design, app ui design, mobile app ui design, mobile ui design, mobile ux design, web ui design, mobile design, best mobile sites, android ui design, iOS design, mobile ux design samples, best ui designs, good ux design, design india`}
    ]);
  }

  ngOnInit() {
  }

}
