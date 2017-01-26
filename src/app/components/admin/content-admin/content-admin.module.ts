import {NgModule} from '@angular/core';
import {SharedModule} from '../common/shared.module';
import {AdminComponent} from './admin.component';
import {PostAdminComponent} from './content-admin/post-admin.component';
import {PostAdminTableComponent} from './content-admin/post-admin-table/post-admin-table.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AdminComponent,
    PostAdminComponent,
    PostAdminTableComponent
  ],
  exports: [
    AdminComponent,
    PostAdminComponent,
    PostAdminTableComponent
  ]
})
export class AdminModule {
}
