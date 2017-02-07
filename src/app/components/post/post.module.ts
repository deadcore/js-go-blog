import {NgModule} from '@angular/core';
import {SharedModule} from '../common/shared.module';
import {PostComponent} from './post.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PostComponent
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
