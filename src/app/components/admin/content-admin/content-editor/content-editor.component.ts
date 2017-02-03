import {Component, OnInit} from '@angular/core';
import {Post} from '../../../../models/post';
import {PostService} from '../../../../services/post.service';
import {Observable} from 'rxjs';
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
  private content: Observable<string>;
  private title: Observable<string>;

  constructor(private postService: PostService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.params.map(params => params['id']);
    this.post = this.id.flatMap(id => this.postService.get(id));
    this.form = this.formBuilder.group({
      Title: [''],
      Content: ['']
    });
    this.content = this.form.get('Content').valueChanges;
    this.title = this.form.get('Title').valueChanges;

    this.populateForm();
    this.form.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .flatMap(content => this.post.map(post => Object.assign(post, content)))
      .flatMap(post => this.postService.patch(post.Id, post))
      .subscribe();
  }

  private populateForm() {
    this.post.subscribe(post => {
      this.form.patchValue(post)
    });
  }

  private submitFormChanges() {

  }

}
