import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-graphic-design-description',
  templateUrl: './graphic-design-description.component.html',
  styleUrls: ['./graphic-design-description.component.scss']
})
export class GraphicDesignDescriptionComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Career');
  }

}
