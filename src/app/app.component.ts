import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SeoService } from './services/seo.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uxmint';

  constructor(private modalService: NgbModal, private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService){

  }

  ngOnInit(){
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe(data => {
      let seoData = data['seo'];
      this.seoService.updateTitle(seoData['title']);
      this.seoService.updateMetaTags(seoData['metaTags']);
    });
  }

  openMenu(){
    this.modalService.open(HeaderComponent,{
      windowClass: 'menu'
    });
  }

}
