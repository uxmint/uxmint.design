import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ui-job-description',
  templateUrl: './ui-job-description.component.html',
  styleUrls: ['./ui-job-description.component.scss']
})
export class UiJobDescriptionComponent implements OnInit {

  job:any = this.route.snapshot.params['job'];


  constructor(private title:Title, private meta:Meta, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Career');
    this.meta.addTags([
      {name: 'description', content: `We thrive to provide meaningful design solutions for business & social challenges that can bring a positive change. Process simplification is our key to good design.` },
      {name: 'keywords', content: `ux designer jobs, ux designer skills, ui developer jobs, ui ux designer, front end developer, ui developer, ui ux developer, ux developer, web ui developer, UX Careers, ui careers`}
    ]);
  }

}
