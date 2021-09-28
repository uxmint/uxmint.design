import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  enquiryRequest(enquiry){
    return this.http.post<any>('https://api.uxmint.in/enquiry-request',enquiry);
  }

  careerRequest(career, resume: File){
    let formData: FormData = new FormData();
    Object.keys(career).forEach(key => {
      if(key == 'resume'){
        formData.append(key,resume,resume.name);
      }else{
        formData.append(key,career[key]);
      }
    });
    return this.http.post<any>('https://api.uxmint.in/career-request',formData);
  }

  blogPosts(){
    return this.http.get<any>('https://api.uxmint.in/all-posts');
  }

}
