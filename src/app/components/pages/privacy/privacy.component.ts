import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
    this.title.setTitle('uxmint - Privacy Policy');
    this.meta.addTags([
      {name: 'description', content: `Privacy Policy` },
      {name: 'keywords', content: ``}
    ]);
  }

  ngOnInit() {
  }

}
