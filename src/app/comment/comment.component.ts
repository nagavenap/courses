import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(public postService1:PostsService) { }

  posts: any=[];

  ngOnInit(): void {
    this.postService1.getComments().subscribe(posts=>{
      this.posts=posts
  })

}
}