import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-development',
  templateUrl: './ui-development.component.html',
  styleUrls: ['./ui-development.component.scss']
})
export class UiDevelopmentComponent implements OnInit {
  active = 'discussion';
  activeIds = 'static-1';
  active2 = 'code-repository';
  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Services');
  }

}
