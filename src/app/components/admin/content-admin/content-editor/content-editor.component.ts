import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/post';
import {Observable} from 'rxjs';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.scss']
})
export class ContentAdminComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.findAll(0);
  }

}
