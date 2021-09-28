import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  subject:Subject<boolean> = new Subject<boolean>();
  constructor() { }
  
  show() {
      this.subject.next(true);
  }
  hide() {
      this.subject.next(false);
  }

  getStatus(): Observable<any>{
    return this.subject.asObservable();
  }

}
