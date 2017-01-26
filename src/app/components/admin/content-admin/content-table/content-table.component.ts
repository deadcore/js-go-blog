import {Component, OnInit} from '@angular/core';
import {Post} from '../../../../models/post';
import {PostService} from '../../../../services/post.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {

  private content: Subject<string> = new Subject<string>();

  private post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.post = new Post();
    this.content
      .debounceTime(1000) // wait 300ms after the last event before emitting last event
      .distinctUntilChanged() // only emit if value is different from previous value
      .subscribe(model => {
        console.log(model);
      });
  }

  contentChange($event: string) {
    this.content.next($event);
  }

}
