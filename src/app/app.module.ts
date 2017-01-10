import {SwitchRequestService} from './services/switch-request.service';
import {DashboardModule} from './components/home/home.module';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {LayoutModule} from 'components/layout/layout.module';
import {AppComponent} from 'app.component';
import {AppRoutingModule} from 'routes';
import {AuthenticationService} from 'services/authentication.service';
import {SharedModule} from 'components/common/shared.module';
import {UserService} from 'services/user.service';
import {PostService} from './services/post.service';
import 'rxjs/Rx';

import {PostComponent} from './components/post/post.component';
import {PostModule} from './components/post/post.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    LayoutModule,
    PostModule,
    DashboardModule
  ],
  providers: [
    // AuthHttpProvider,
    UserService,
    SwitchRequestService,
    AuthenticationService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
