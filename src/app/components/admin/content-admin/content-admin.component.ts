import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/post';
import {Observable} from 'rxjs';
import {PostService} from '../../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.scss']
})
export class ContentAdminComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
    this.posts = this.postService.findAll(0);
  }

  createPost() {
    return this.postService.post(new Post()).subscribe(id => {
      this.router.navigate([`/admin/content/${id}`])
    })
  }

  deletePost(post: Post) {
    this.posts = this.postService.delete(post).flatMap(() => this.postService.findAll(0));
  }

}
