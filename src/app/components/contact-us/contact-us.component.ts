import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../../services/api.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  form:FormGroup;
  alert:any = {};
  submitted: boolean = false;
  
  constructor(private fb:FormBuilder, private apiService: APIService, private title:Title, private meta:Meta) { 
    this.title.setTitle('Contact');
    this.meta.addTags([
      {name: 'description', content: `Wanting to kick start your project? Leave a message, will get back to you in 24 hours.` },
      {name: 'keywords', content: `Contact, Mail, Call, Address, Directions`}
    ]);
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['',Validators.required],
      phone: ['',[Validators.required,Validators.pattern(/^\+?[0-9]{10}/)]],
      email: ['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      message: ['',Validators.required]
    });
  }

  hasError(control,validation){
    return this.form.get(control).hasError(validation) && (this.form.get(control).touched || this.submitted);
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.apiService.enquiryRequest(this.form.value).subscribe(()=>{
        this.alert = {
          type: 'success',
          message: 'Thank you for writing to us! We have received your message, our team will get in touch with you shortly.'
        };
        this.submitted = false;
        this.form.reset();
        window.scroll(0,0);
      },
      (error) => {
        if(error.status == 422){
          let errors = error.error;
          Object.keys(errors).forEach(key => this.form.get(key).setErrors({ remote: errors[key] }));
        }else{
          this.alert = {
            type: 'fail',
            message: 'Oops, sorry something went wrong. Alternately you can write to enquire@uxmint.in or reach out to us at 99404-10072/98840-53886'
          };
        }
      });
    }
  }
  
}