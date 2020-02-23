import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  {path:"",component:CoursesComponent},
  {path:"comments",component:CommentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
