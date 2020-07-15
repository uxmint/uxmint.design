import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {


  constructor(private title:Title, private meta:Meta) { 
    this.title.setTitle('uxmint -  Case Studies - Health Care');
    this.meta.addTags([
      {name: 'description', content: `Holistic healthcare system for the primary healthcare centers in remote hamlets to enable doctors, healthcare workers.` },
      {name: 'keywords', content: `Portfolio, UX portfolio, UI  portfolio, Sugavazhvu, Health Care, enterprise design, service design, business solution, responsive web design, website design, ux app, mobile ux, interface design, ui mobile, ios ui design, ui designing, ui/ux, ui and ux design, app ui design, mobile app ui design, mobile ui design, mobile ux design, web ui design, mobile design, best mobile sites, android ui design, iOS design, mobile ux design samples, best ui designs, good ux design, design india`}
    ]);
  }

  ngOnInit() {
  }

}
