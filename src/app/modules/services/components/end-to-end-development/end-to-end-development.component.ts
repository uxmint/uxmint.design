import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-end-to-end-development',
  templateUrl: './end-to-end-development.component.html',
  styleUrls: ['./end-to-end-development.component.scss']
})
export class EndToEndDevelopmentComponent implements OnInit {
  active = 'discussion';
  activeIds = 'static-1';
  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Services');
  }

}
