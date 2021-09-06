import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usability-testing',
  templateUrl: './usability-testing.component.html',
  styleUrls: ['./usability-testing.component.scss']
})
export class UsabilityTestingComponent implements OnInit {
  active = 'discussion';
  constructor() { }

  ngOnInit(): void {
  }

}
