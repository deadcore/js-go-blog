import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Observable} from 'rxjs';
import {Post} from '../../models/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: Observable<string>;
  post: Observable<Post>;

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.params.map(params => params['id']);
    this.post = this.id.flatMap(id => this.postService.get(id))
  }

}
