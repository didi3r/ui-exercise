import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/Email';

@Pipe({
  name: 'filterByTag',
})
export class FilterByTagPipe implements PipeTransform {
  transform(emails: Email[], tag: string): Email[] {
    if (!tag || tag === 'all') {
      return emails;
    }
    const filtered = emails.filter((e) => e.tags.indexOf(tag) > -1);
    return filtered;
  }
}
