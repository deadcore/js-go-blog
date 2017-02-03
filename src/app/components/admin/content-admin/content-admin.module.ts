import {NgModule} from '@angular/core';
import {SharedModule} from '../../common/shared.module';
import {ContentAdminComponent} from './content-admin.component';
import {ContentEditorComponent} from './content-editor/content-editor.component';
import {ContentTableComponent} from './content-table/content-table.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContentAdminComponent,
    ContentEditorComponent,
    ContentTableComponent
  ],
  exports: [
    ContentAdminComponent
  ]
})
export class ContentModule {
}
