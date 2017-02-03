import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Post} from '../../../../models/post';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit {

  @Input() posts: Post[];

  @Output() deletePost: EventEmitter<Post> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deletePostHandler(post: Post) {
    this.deletePost.emit(post);
  }

}
