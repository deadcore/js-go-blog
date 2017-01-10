import {NgModule} from '@angular/core';
import {SharedModule} from '../common/shared.module';
import {PostComponent} from './post.component';
import {PostDisplayComponent} from './post-display/post-display.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PostComponent,
    PostDisplayComponent
  ],
  exports: [
    PostComponent,
    PostDisplayComponent
  ]
})
export class PostModule { }
