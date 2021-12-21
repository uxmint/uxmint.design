import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private basePath:string = 'https://www.uxmint.in/uxmint.design/'

  constructor(private http:HttpClient) { }

  enquiryRequest(enquiry){
    let formData: FormData = new FormData();
    Object.keys(enquiry).forEach(key => {
      formData.append(key,enquiry[key]);
    });
    return this.http.post<any>(`${this.basePath}enquire.php`,formData);
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
