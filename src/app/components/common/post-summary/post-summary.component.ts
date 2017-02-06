import {Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {Post} from '../../../models/post';
import {MnFullpageService} from 'ng2-fullpage';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements AfterContentInit {

  @Input() post: Post;

  constructor(private fullpageService: MnFullpageService) {}

  ngAfterContentInit() {
    this.fullpageService.reBuild();
  }

}
