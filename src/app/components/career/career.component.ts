import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor( private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Career');
  }


}
