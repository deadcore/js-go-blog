import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <div class="row">
      <div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0">
        <h3 class="text-center">
          {{title}}
        </h3>
        <div class="input-group">
          <span class="input-group-addon" id="search"><i class="glyphicon glyphicon-search"></i></span>
          <input (input)="onInputChange($event)" #input type="text" [value]="searchQuery" class="form-control"
            placeholder="{{placeholder}}" aria-describedby="search">
        </div>
      </div>
    </div>`
})
export class SearchBarComponent {

  @Input() title: string;
  @Input() placeholder: string;
  @Input() searchQuery: string;

  @Output() searchQueryEmitter = new EventEmitter<string>();

  onInputChange(event) {
    this.searchQueryEmitter.emit(event.target.value);
  }
}
