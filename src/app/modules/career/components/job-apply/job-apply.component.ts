import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder, private title:Title , private meta:Meta) {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      url: [null, [Validators.required]],
      type: [null, [Validators.required]],
      mode: [null, [Validators.required]],
      location: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
   }

   hasError(control:string, validation:string):boolean{
    return this.form.get(control).hasError(validation);
  }

  submitcareer(){
    
  }
  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Career');
    this.meta.addTags([
      {name: 'description', content: `We thrive to provide meaningful design solutions for business & social challenges that can bring a positive change. Process simplification is our key to good design.` },
      {name: 'keywords', content: `ux designer jobs, ux designer skills, ui developer jobs, ui ux designer, front end developer, ui developer, ui ux developer, ux developer, web ui developer, UX Careers, ui careers`}
    ]);
  }

}
