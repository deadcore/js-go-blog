import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/post';
import {Observable} from 'rxjs';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.scss']
})
export class PostAdminComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.findAll(0);
  }

}
