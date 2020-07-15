import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
    this.title.setTitle('uxmint -  Case Studies - Events Management');
    this.meta.addTags([
      {name: 'description', content: `Redesign of events management portal to search and connect the network of professionals across multiple discipline to bring the customer the best of best experience within their budget.` },
      {name: 'keywords', content: `Portfolio, UX portfolio, UI  portfolio, bigfday, events management, networking, business solution, responsive web design, website design, ux app, mobile ux, interface design, ui mobile, ios ui design, ui designing, ui/ux, ui and ux design, app ui design, mobile app ui design, mobile ui design, mobile ux design, web ui design, mobile design, best mobile sites, android ui design, iOS design, mobile ux design samples, best ui designs, good ux design, design india`}
    ]);
  }

  ngOnInit() {

  }

}
