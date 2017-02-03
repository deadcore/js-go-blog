import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true
    }
  ]
})
export class EditorComponent implements ControlValueAccessor {

  @Input('value') _value = '';

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  constructor() {
  }

  // this is the initial value set to the component
  public writeValue(obj: any) {
    if (obj) {
      this._value = obj;
    }
  }

  // registers 'fn' that will be fired wheb changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // not used, used for touch input
  public registerOnTouched() { }

  // change events from the textarea
  private onChange(event) {

    // update the form
    this.propagateChange(event.target.value);
  }

  // the method set in registerOnChange to emit changes back to the form
  private propagateChange = (_: any) => { };

}
