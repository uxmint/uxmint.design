import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor( private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Works');
  }

}
