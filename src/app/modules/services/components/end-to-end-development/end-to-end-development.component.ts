import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-to-end-development',
  templateUrl: './end-to-end-development.component.html',
  styleUrls: ['./end-to-end-development.component.scss']
})
export class EndToEndDevelopmentComponent implements OnInit {
  active = 'discussion';
  constructor() { }

  ngOnInit(): void {
  }

}
