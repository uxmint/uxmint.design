import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-job-description',
  templateUrl: './ui-job-description.component.html',
  styleUrls: ['./ui-job-description.component.scss']
})
export class UiJobDescriptionComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Career');
  }

}
