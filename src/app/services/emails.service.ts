import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Email } from '../interfaces/Email';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailsService {
  emails$ = new BehaviorSubject<Email[]>([]);
  tags$ = new BehaviorSubject<string[]>([]);

  private emailsFetched = false;

  constructor(private apiService: ApiService) {}

  fetchEmails(): void {
    if (!this.emailsFetched) {
      this.apiService
        .getEmails()
        .pipe(
          tap((emails) => {
            this.tags$.next(this.extractTags(emails));
          })
        )
        .subscribe((emails) => this.emails$.next(emails));
    }
  }

  private extractTags(emails: Email[]) {
    const allTags = emails.reduce((acc, curr) => [...acc, ...curr.tags], [] as string[]);
    return allTags.filter((item, index) => allTags.indexOf(item) === index);
  }
}
