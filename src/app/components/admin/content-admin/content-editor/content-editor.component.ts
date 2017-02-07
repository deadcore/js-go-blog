import {Component, OnInit} from '@angular/core';
import {Post} from '../../../../models/post';
import {PostService} from '../../../../services/post.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {

  private post: Observable<Post>;
  private id: Observable<string>;
  private form: FormGroup;
  private saveOperation: Subscription;

  constructor(private postService: PostService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.params.map(params => params['id']);
    this.form = this.formBuilder.group({
      Title: [''],
      Content: ['']
    });

    this.post = this.id
      .flatMap(id => this.postService.get(id))
      .do(post => this.form.patchValue(post))
      .merge(this.form.valueChanges);

    this.saveOperation = this.post.debounceTime(1000)
      .distinctUntilChanged()
      .flatMap(post => this.id.map(id => {
        post.Id = id;
        return post
      }))
      .flatMap(post => this.postService.patch(post.Id, post))
      .subscribe();
  }

}
