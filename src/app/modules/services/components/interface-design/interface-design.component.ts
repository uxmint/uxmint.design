import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-design',
  templateUrl: './interface-design.component.html',
  styleUrls: ['./interface-design.component.scss']
})
export class InterfaceDesignComponent implements OnInit {
  active = 'discussion';

  constructor() { }

  ngOnInit(): void {
  }

}
