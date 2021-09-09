import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  active1 = 'user-experience';
  active2 = 'enterprise-applications';

  constructor() { }

  ngOnInit(): void {
  }

}
