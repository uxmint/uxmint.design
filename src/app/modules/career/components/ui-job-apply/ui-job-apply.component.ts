import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-job-apply',
  templateUrl: './ui-job-apply.component.html',
  styleUrls: ['./ui-job-apply.component.scss']
})
export class UiJobApplyComponent implements OnInit {
  careerform: FormGroup;
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
    this.careerform = this.fb.group({
      position: ['',Validators.required],
      name: ['',Validators.required],
      phonenumber: ['',[Validators.required,Validators.pattern(/^\+?[0-9]{10}/)]],
      emailId: ['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      portfolioUrl: ['',Validators.required]
    });
   }
  onCareerChange(value) {
    this.careerposition = value;
  }
  submit(){
    console.log('Form', this.careerform.value);
    let formData ={
      position: this.position,
      name: this.careerform.get('name').value,
      phone: this.careerform.get('phone').value,
      email: this.careerform.get('email').value,
      message: this.careerform.get('message').value
    }
        console.log('FormData-Contact', formData);
  }
  submitcareer(){
    
  }
  ngOnInit(): void {
  }

}
