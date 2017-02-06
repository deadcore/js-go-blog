import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PostSummaryComponent} from './post-summary/post-summary.component';
import {EditorModule} from './editor/editor.module';
import {MarkdownModule} from './markdown/markdown.module';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    EditorModule,
    MarkdownModule,
    PostSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PostSummaryComponent
  ],
})
export class SharedModule {
}
