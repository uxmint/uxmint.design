import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor( private title:Title, private meta:Meta) { 
    this.title.setTitle('Uxmint Design - About Us');
    this.meta.addTags([
      {name: 'description', content: `We thrive to provide meaningful design solutions for business & social challenges that can bring a positive change. Process simplification is our key to good design.` },
      {name: 'keywords', content: `UX consulting, ui/ux agency, user-centered design, product design, user experience, lean ux, agile ux, ux consultant, ui design company, design company, ui company, ux design company, ui ux company, user experience design agency, digital design agency, best design agency, ux design agency in india, ux ui design agencies, ui ux studio, uiux studio, ui studio, creative design studio, website design company, ux design company in india, best ux companies, ui ux design companies in chennai, top ux companies, top ux agencies, ux/ui contracting companies, top ux agency, best design agency, design partners, process improvement, UX Consultant`}
    ]);
  }

  ngOnInit(): void {
  }

}
