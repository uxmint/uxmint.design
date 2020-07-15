import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
    this.title.setTitle('uxmint - Terms and Conditions');
    this.meta.addTags([
      {name: 'description', content: `Terms and Conditions` },
      {name: 'keywords', content: ``}
    ]);
  }

  ngOnInit() {
  }

}
