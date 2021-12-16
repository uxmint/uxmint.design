import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-interface-design',
  templateUrl: './interface-design.component.html',
  styleUrls: ['./interface-design.component.scss']
})
export class InterfaceDesignComponent implements OnInit {
  active = 'discussion';
  activeIds = 'static-1';
  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Services');
  }

}
