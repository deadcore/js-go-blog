import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() decrementButton: string;
  @Input() incrementButton: string;
  @Input() startPage: number;

  @Output() pageChange = new EventEmitter<number>();

  onClick(ammount: number) {
    this.startPage = this.startPage += ammount;
    this.pageChange.emit(this.startPage);
  }
}
