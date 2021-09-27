import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  active = 'query';
  form: FormGroup;
  craeerform: FormGroup;
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
  careerPositions: any[] = [
    { id: 1, name : 'UX Designer', value : 'UX Designer', checked: false },
    { id: 2, name : 'UI Designer', value : 'UI Designer', checked: false },
    { id: 3, name : 'Product Designer', value : 'Product Designer', checked: false },
    { id: 4, name : 'Brand Consultant', value : 'Brand Consultant', checked: false },
    { id: 5, name : 'Front-End Developer', value : 'Front-End Developer', checked: false },
    { id: 6, name : 'Product Design', value : 'Product Design', checked: false }
  ];
  position: any;
  careerposition: any;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      position: ['',Validators.required],
      name: ['',Validators.required],
      phone: ['',[Validators.required,Validators.pattern(/^\+?[0-9]{10}/)]],
      email: ['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      message: ['',Validators.required]
    });
    this.craeerform = this.fb.group({
      position: ['',Validators.required],
      name: ['',Validators.required],
      phonenumber: ['',[Validators.required,Validators.pattern(/^\+?[0-9]{10}/)]],
      emailId: ['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      portfolioUrl: ['',Validators.required]
    });
   }
   onChange(value) {
    this.position = value;
  }
  onCareerChange(value) {
    this.careerposition = value;
  }
  submit(){
    console.log('Form', this.form.value);
    let formData ={
      position: this.position,
      name: this.form.get('name').value,
      phone: this.form.get('phone').value,
      email: this.form.get('email').value,
      message: this.form.get('message').value
    }
        console.log('FormData-Contact', formData);
  }
  submitcareer(){
    
  }
  ngOnInit(): void {
  }

}
