import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-uxmint-terms',
  templateUrl: './uxmint-terms.component.html',
  styleUrls: ['./uxmint-terms.component.scss']
})
export class UxmintTermsComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
    this.title.setTitle('uxmint - Terms and Conditions');
    this.meta.addTags([
      {name: 'description', content: `Terms and Conditions` },
      {name: 'keywords', content: ``}
    ]);
  }
  ngOnInit(): void {
  }

}
