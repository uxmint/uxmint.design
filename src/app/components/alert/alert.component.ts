import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  
  title:string;
  message: string;
  yesBtn: string;
  noBtn: string;
  alertClass:string;

  constructor(public ngbActiveModal: NgbActiveModal, private cd:ChangeDetectorRef) {}

  ngOnInit() {
    
  }

}