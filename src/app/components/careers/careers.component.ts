import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../../services/api.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  form:FormGroup;
  alert:any = {};
  submitted: boolean = false;
  resume : File;
  items: any[] = [
    { name : 'Product Designer', checked: false },
    { name : 'UX Designer', checked: false },
    { name : 'UI Designer', checked: false },
    { name : 'Branding Consultant', checked: false },
    { name : 'Front-end Developer', checked: false },
    { name : 'Mobile Developer', checked: false }
  ];

  constructor(private fb:FormBuilder, private apiService: APIService, private title:Title, private meta:Meta) { 
    this.title.setTitle('Careers');
    this.meta.addTags([
      {name: 'description', content: `Hey we are always welcome to onboard new talents!
      apply if you are an UX Designer, Product Designer, UI Designer, Branding Consultant, Front-end Developer, Mobile Developer, Full Stack Developer` },
      {name: 'keywords', content: `ux designer jobs, ux designer jobs, ui developer jobs, uxui designer, front end developer, angular developer, ui developer, ui ux developer, ux developer, web ui developer, ux careers, ui careers, android developer, iOS developer`}
    ]);
  }

  ngOnInit() {
    this.form = this.fb.group({
      position: ['',Validators.required],
      name: ['',Validators.required],
      phone: ['',[Validators.required,Validators.pattern(/^\+?[0-9]{10}/)]],
      email: ['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      fileInput: ['',Validators.required],
      resume: ['',Validators.requiredTrue],
      portfolio_url: ['',Validators.pattern(/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/)]
    });
  }

  togglePosition(item){
    item.checked = !item.checked;
    let selected = this.items.filter(item=>item.checked).map(item=>item.name).toString();
    this.form.get('position').setValue(selected);
  }

  hasError(control,validation){
    return this.form.get(control).hasError(validation) && (this.form.get(control).touched || this.submitted);
  }

  onChange(resume: any) : void {
    if(resume.target.files.length){
      this.resume = resume.target.files[0];
      this.form.get('resume').setValue(true);
    }
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.apiService.careerRequest(this.form.value,this.resume).subscribe(()=>{
        this.alert = {
          type: 'success',
          message: 'Thank you for writing to us! We have received your message, our team will get in touch with you shortly.'
        };
        this.submitted = false;
        this.resume = undefined;
        this.items.map(item=>item.checked = false);
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
