import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private ngbModal: NgbModal) { }

  show(title:string, message: string, yesBtn: string = 'Ok', noBtn:string = '', alertClass:string = '') : NgbModalRef {
    let modalRef:NgbModalRef = this.ngbModal.open(AlertComponent, {
      centered: true,
      backdrop : 'static',
      keyboard : false,
      windowClass: 'alert-modal'
    });
    modalRef.componentInstance.alertClass = alertClass;
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.yesBtn = yesBtn;
    modalRef.componentInstance.noBtn = noBtn;
    return modalRef;
  }

}
