import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = null;

  constructor() {}

  ngOnInit() {}
  getAuthorLink() {
    return  `/author/${ this.post.author.id }`;
  }

  getPostLink() {
    return  `/post/${ this.post.id }`;
  }
}
