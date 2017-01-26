import {NgModule} from '@angular/core';
import {ContentEditorComponent} from './content-editor.component';
import {SharedModule} from '../../../common/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ContentEditorComponent
  ],
  exports: [
    ContentEditorComponent
  ]
})
export class ContentEditorModule {
}
