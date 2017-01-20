import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './components/post/post.component';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import * as Filters from 'filters';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {showNavbar: true}},
  {path: 'login', component: LoginComponent},
  {path: 'post', children: [
    {path: ':id', component: PostComponent},
  ]},
  {path: 'admin', component: AdminComponent, canActivate: [Filters.AuthenticationFilter] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    Filters.AuthenticationFilter
  ]
})
export class AppRoutingModule {
}
