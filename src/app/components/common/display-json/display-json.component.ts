import { Component, Input } from '@angular/core';

@Component({
  selector: './app-display-json',
  template: `<pre class="display-json">{{displayItem | json:3}}</pre>`,
  styleUrls: ['./display-json.component.scss']
})
export class DisplayJsonComponent {
  @Input() displayItem: any;
}
