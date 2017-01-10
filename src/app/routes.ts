import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './components/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { showNavbar: true }  },
  {
    path: 'post', children: [
    { path: ':id', component: PostComponent },
  ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
