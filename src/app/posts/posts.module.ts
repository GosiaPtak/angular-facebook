import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  exports: [PostListComponent],
  providers: [
    PostsService
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }