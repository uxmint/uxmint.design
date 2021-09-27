import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-development',
  templateUrl: './ui-development.component.html',
  styleUrls: ['./ui-development.component.scss']
})
export class UiDevelopmentComponent implements OnInit {
  active = 'discussion';
  activeIds = 'static-1';
  constructor() { }

  ngOnInit(): void {
  }

}
