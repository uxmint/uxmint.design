import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Uxmint';
  menuShow:boolean = false;
  activePath:string;
  alerts: any[] = [];
  loading:boolean = false;
  
  constructor(private loaderService:LoaderService, private cdref:ChangeDetectorRef, private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private router: Router){
    this.angulartics2GoogleAnalytics.startTracking();
  }

  ngOnInit(){
    this.openNav();
    this.closeNav();
    window.scroll(0,0);
    this.loaderService.getStatus().subscribe(status=>{
      this.loading = status;
      this.cdref.detectChanges();
    });
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.activePath = event.url;
      }
    });
  }

  close(id){
    this.alerts = this.alerts.filter(alert=>alert.id != id);
  }

  onDeactivate(){
    this.menuShow = false;
  }

  toggleMenu(){
    this.menuShow = !this.menuShow;
  }

  openNav() { 
    document.getElementById( 
        "myNav").style.display = "block"; 
} 

closeNav() { 
  document.getElementById( 
      "myNav").style.display = "none"; 
} 

}
