import {Component, Input, AfterContentInit} from '@angular/core';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements AfterContentInit {

  @Input() post: Post;

  constructor() {}

  ngAfterContentInit() {
  }

}
