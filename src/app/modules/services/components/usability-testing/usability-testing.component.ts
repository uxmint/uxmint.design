import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usability-testing',
  templateUrl: './usability-testing.component.html',
  styleUrls: ['./usability-testing.component.scss']
})
export class UsabilityTestingComponent implements OnInit {
  active2 = 'discussion';
  activeIds = 'static-1';
  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Services');
  }
  testimonials: any[] = [
    { description: ' End users are not using the product in the way it was intended to be used ? '},
    {  description: ' Unsure of why the users are dropping off the product & For Assurance'},
    {  description: ' Mapping the category of users to the designed features'},
    {  description: ' Explore focus areas of the product'},
    {  description: ' Analyze how usable is the product in the context of usage'},
    {  description: ' Risk reduction in usability before the launch of the product'},
    {  description: ' Not sure which option of design will be beneficial'},
    {  description: ' To get an understanding of users mental model'}    
    ];
}
