import {NgModule} from '@angular/core';
import {SharedModule} from '../common/shared.module';
import {AdminComponent} from './admin.component';
import {ContentModule} from './content-admin/content-admin.module';

@NgModule({
  imports: [
    SharedModule,
    ContentModule
  ],
  declarations: [
    AdminComponent,
  ],
  exports: [
    AdminComponent,
  ]
})
export class AdminModule {
}
