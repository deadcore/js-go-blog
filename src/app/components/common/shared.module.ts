import {DisplayJsonComponent} from './display-json/display-json.component';
import {PagerComponent} from './pager/pager.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PostSummaryComponent} from './post-summary/post-summary.component';
import {PostListComponent} from './post-list/post-list.component';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    SearchBarComponent,
    PagerComponent,
    DisplayJsonComponent,
    PostSummaryComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SearchBarComponent,
    PagerComponent,
    DisplayJsonComponent,
    PostSummaryComponent,
    PostListComponent
  ],
})
export class SharedModule {
}
