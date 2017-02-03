import {NgModule} from '@angular/core';
import {EditorComponent} from './editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditorComponent
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule {

}
