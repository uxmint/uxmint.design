import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor( private title:Title , private meta: Meta, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Career');
    this.meta.addTags([
      {name: 'description', content: `We thrive to provide meaningful design solutions for business & social challenges that can bring a positive change. Process simplification is our key to good design.` },
      {name: 'keywords', content: `ux designer jobs, ux designer skills, ui developer jobs, ui ux designer, front end developer, ui developer, ui ux developer, ux developer, web ui developer, UX Careers, ui careers`}
    ]);
  }

  openMenu(){
    this.modalService.open(HeaderComponent,{
      windowClass: 'menu'
    });
  }
}
