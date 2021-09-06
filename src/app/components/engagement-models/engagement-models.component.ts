import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-models',
  templateUrl: './engagement-models.component.html',
  styleUrls: ['./engagement-models.component.scss']
})
export class EngagementModelsComponent implements OnInit {
  active = 'engagement';
  constructor() { }

  ngOnInit(): void {
  }

}
