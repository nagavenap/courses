import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public http :HttpClient) { }

  url="https://jsonplaceholder.typicode.com/posts"
  
  url1="https://jsonplaceholder.typicode.com/posts/1/comments"
    getPosts(){
      return  this.http.get(this.url)
    }
    getComments(){
      return this.http.get(this.url1)
    }
  
}
