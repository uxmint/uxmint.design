import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';
import { Angulartics2Module } from 'angulartics2';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhone, faMobileAlt ,faEnvelope, faMapMarkerAlt, faBars, faDirections, faPaperclip, faChevronRight, faCheckCircle, faExclamationTriangle, 
faCog, faUser, faGift, faBell, faSearch, faCalendar, faPlayCircle, faUserAlt, faThLarge, faEnvelopeOpen, faClock, faLink, faInfoCircle, faUniversity, faUmbrella, faDollarSign, faStoreAlt, faHandHoldingHeart,  faGraduationCap,
 faCheckSquare, faChartBar, faChevronDown, faChevronUp, faPortrait, faCamera, faCalendarAlt, faArrowLeft, faUserFriends, faCommentAlt, faUsers, faDesktop} from '@fortawesome/free-solid-svg-icons';
import { faYoutubeSquare,faAndroid, faFacebookSquare, faLinkedin, faInstagram, faMedium, faWhatsapp, faFacebook, faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareersComponent } from './components/careers/careers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EventManagementComponent } from './components/projects/event-management/event-management.component';
import { MarketingComponent } from './components/projects/marketing/marketing.component';
import { NetworkingComponent } from './components/projects/networking/networking.component';
import { HealthComponent } from './components/projects/health/health.component';
import { APIService } from './services/api.service';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { UxConsultingComponent } from './components/services/ux-consulting/ux-consulting.component';
import { VisualDesignComponent } from './components/services/visual-design/visual-design.component';
import { DevelopmentComponent } from './components/services/front-end-development/development.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { EnquiryFooterComponent } from './components/enquiry-footer/enquiry-footer.component';
import { BackEndDevelopmentComponent } from './components/services/back-end-development/back-end-development.component';
import { UsabilityTestingComponent } from './components/services/usability-testing/usability-testing.component';
import { SkillDevelopmentComponent } from './components/projects/skill-development/skill-development.component';
import { SocialReviewComponent } from './components/projects/social-review/social-review.component';
import { ConstructionPortalComponent } from './components/projects/construction-portal/construction-portal.component';
import { ChildCareComponent } from './components/projects/child-care/child-care.component';
import { HealthCareComponent } from './components/projects/health-care/health-care.component';
import { AppDevelopmentComponent } from './components/projects/app-development/app-development.component';
import { WebDevelopmentComponent } from './components/projects/web-development/web-development.component';
import { CarUsabilityTestingComponent } from './components/projects/car-usability-testing/car-usability-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactUsComponent,
    CareersComponent,
    PageNotFoundComponent,
    EventManagementComponent,
    MarketingComponent,
    NetworkingComponent,
    HealthComponent,
    UxConsultingComponent,
    VisualDesignComponent,
    DevelopmentComponent,
    TermsAndConditionsComponent,
    PrivacyComponent,
    AboutUsComponent,
    BlogComponent,
    OurTeamComponent,
    EnquiryFooterComponent,
    BackEndDevelopmentComponent,
    UsabilityTestingComponent,
    SkillDevelopmentComponent,
    SocialReviewComponent,
    ConstructionPortalComponent,
    ChildCareComponent,
    HealthCareComponent,
    AppDevelopmentComponent,
    WebDevelopmentComponent,
    CarUsabilityTestingComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NguCarouselModule,
    FontAwesomeModule,
    Angulartics2Module.forRoot()
  ],
  providers: [
    { provide: 'Window',  useValue: window },
    APIService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faPhone,faMobileAlt, faWindows, faAndroid, faEnvelope, faMapMarkerAlt, faYoutubeSquare, faApple, faFacebookSquare, faLinkedin, faBars, faDirections, faPaperclip, faInstagram, faMedium, faChevronRight, faCheckCircle, faExclamationTriangle,faCog, faUser, faGift, faBell, faSearch, faCalendar, faPlayCircle, faUserAlt, faThLarge, faEnvelopeOpen, faClock, faLink, faInfoCircle, faCheckSquare, faChartBar, faChevronDown, faChevronUp, faPortrait, faCamera, faCalendarAlt, faArrowLeft, faUserFriends, faWhatsapp, faCommentAlt, faFacebook, faUsers, faDesktop, faUniversity, faUmbrella, faDollarSign, faStoreAlt, faHandHoldingHeart, faGraduationCap);
  }
}
