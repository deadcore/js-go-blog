import {NgModule} from '@angular/core';
import {MarkdownPipe} from './markdown.pipe';

@NgModule({
  imports: [],
  declarations: [
    MarkdownPipe
  ],
  exports: [
    MarkdownPipe
  ]
})
export class MarkdownModule {

}
