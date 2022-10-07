import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../../services/api.service';
import { Title, Meta } from '@angular/platform-browser';
import { AlertService } from './../../services/alert.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  active = 'query';
  form: FormGroup;
  submitted = false;
  positions: any[] = [
    { id: 1, name : 'UX Consulting', value : 'UX Consulting', checked: false },
    { id: 2, name : 'UX Resourcing', value : 'UX Resourcing', checked: false },
    { id: 3, name : 'Strategy Design', value : 'Strategy Design', checked: false },
    { id: 4, name : 'Usability Testing', value : 'Usability Testing', checked: false },
    { id: 5, name : 'Mobile App Design', value : 'Mobile App Design', checked: false },
    { id: 6, name : 'Product Design', value : 'Product Design', checked: false },
    { id: 7, name : 'Digital Transformation', value : 'Digital Transformation', checked: false },
    { id: 8, name : 'Something more', value : 'Something more', checked: false }
  ];
  position: any;
  careerposition: any;

  constructor(private fb:FormBuilder, private apiService: APIService, private title:Title,private meta:Meta, private alert:AlertService, private modalService: NgbModal) {
    this.form = this.fb.group({
      position: ['',Validators.required],
      name: ['',Validators.required],
      phone: ['',[Validators.required,Validators.pattern(/^\+?[0-9]{10}/)]],
      email: ['',[Validators.required,Validators.email]],
      business: ['', Validators.required],
      message: ['', [Validators.required,Validators.minLength(15)]]
    });
    this.title.setTitle('Uxmint Design - Contact Us');
    this.meta.addTags([
      {name: 'description', content: `We are eager to collaborate for Design Strategy or Customer Experience Design for your business. Drop an email to <a href="mailto:hello@uxmint.in?subject=Query and Collabration!">hello@uxmint.inn</a>` },
      {name: 'keywords', content: `Contact, Mail, Call, Address, Directions`}
    ]);
   }
   onChange(value) {
    this.position = value;
  }
  submit(){
     this.submitted=true;
    if(this.form.valid){
      let formData ={
        position: this.position,
        name: this.form.get('name').value,
        phone: this.form.get('phone').value,
        email: this.form.get('email').value,
        message: this.form.get('message').value,
        business: this.form.get('business').value
      }
          this.apiService.enquiryRequest(formData).subscribe(data => {
            if(data.success == true){
              this.form.reset();
              this.form.controls.position.setValue('');
              this.alert.show('CONFIRMATION','Thank you for writing to us! We have received your message, our team will get in touch with you shortly.','OKAY','','success');
            }else{
              this.alert.show('ALERT','Oops, sorry something went wrong. Alternately you can write to <a href="mailto:hello@uxmint.in?subject=Query and Collabration!">hello@uxmint.inn</a> or reach out to us at <a href="tel:+91 9884053886">+91 9884053886</a> / <a href="tel:+91 9940410072">+91 9940410072</a>','OKAY','','failure');
            }
          });
        }
  }
  ngOnInit(): void {
  }
  hasError(control:string,validation:string):boolean{
    return this.form.get(control).hasError(validation) && (this.form.get(control).touched || this.submitted)
  }

  openMenu(){
    this.modalService.open(HeaderComponent,{
      windowClass: 'menu'
    });
  }
}
