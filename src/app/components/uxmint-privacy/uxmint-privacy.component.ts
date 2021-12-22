import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-uxmint-privacy',
  templateUrl: './uxmint-privacy.component.html',
  styleUrls: ['./uxmint-privacy.component.scss']
})
export class UxmintPrivacyComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
    this.title.setTitle('uxmint - Privacy Policy');
    this.meta.addTags([
      {name: 'description', content: `Privacy Policy` },
      {name: 'keywords', content: ``}
    ]);
  }


  ngOnInit(): void {
  }

}
