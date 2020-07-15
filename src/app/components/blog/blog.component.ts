import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts:any[];

  constructor(private apiService:APIService) { }

  ngOnInit() {
    this.apiService.blogPosts().subscribe(data=>{
      this.posts = data;
    });
  }

}