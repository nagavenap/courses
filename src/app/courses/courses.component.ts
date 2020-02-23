import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(public postService:PostsService) { }


posts:any=[];

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts=>{
     this.posts=posts
    })
  }

}
