import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) {
    this.title.setTitle('Front-end Development');
    this.meta.addTags([
      {name: 'description', content: `Bringing life to the design is the exciting and crucial part of implementation. Our team can assist in creating the front-end interface which are responsive. ` },
      {name: 'keywords', content: `Front-end designer, front-end developer, UI developer, android developer, android designer, iOS designer, iOS developer, angular, HTML, CSS, bootstrap, angular, javascript, nodejs, js, ui consultant, web designing, user interface developer, ui framework`}
    ]);
  }

  ngOnInit() {
  }

}
