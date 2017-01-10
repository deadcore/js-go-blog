import {Router} from '@angular/router';
import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements OnInit {

  @Input() post: Post;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
