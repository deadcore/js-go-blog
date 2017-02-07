import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../common/shared.module';
import {PostListComponent} from './post-list/post-list.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    PostListComponent
  ],
  exports: [HomeComponent]
})
export class DashboardModule {
}

