import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor( private title:Title, private meta:Meta, private modalService: NgbModal) { 
    this.title.setTitle('Uxmint Design - About Us');
    this.meta.addTags([
      {name: 'description', content: `We thrive to provide meaningful design solutions for business & social challenges that can bring a positive change. Process simplification is our key to good design.` },
      {name: 'keywords', content: `ux consultant, ui design company, ui company, ux design company, ui ux company, user experience design agency, best uxui agency, ux design agency in india, ux ui design agencies, ui ux studio, uiux studio, ui studio, website design company, ux design company in india, best ux companies, ui ux design companies in mumbai, top ux companies, top ux agencies, top ux agency, user experience, ux research companies, ux research agency, ux research companies India`}
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
