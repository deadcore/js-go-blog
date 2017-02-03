import {PipeTransform, Pipe} from '@angular/core';
import * as Showdown from 'showdown';

@Pipe({
  name: 'Markdown'
})
export class MarkdownPipe implements PipeTransform {

  private converter = new Showdown.Converter();

  public transform(markdown: string): string {
    if (markdown == null) return '';
    return this.converter.makeHtml(markdown)
  }

}
