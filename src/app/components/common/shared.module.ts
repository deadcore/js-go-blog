import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PostSummaryComponent} from './post-summary/post-summary.component';
import {EditorModule} from './editor/editor.module';
import {MarkdownModule} from './markdown/markdown.module';
import {PostDisplayComponent} from './post-display/post-display.component';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    EditorModule,
    MarkdownModule,
    PostSummaryComponent,
    PostDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule
  ],
  declarations: [
    PostSummaryComponent,
    PostDisplayComponent
  ],
})
export class SharedModule {
}
