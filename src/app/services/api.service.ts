import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Email } from '../interfaces/Email';
import { EmailCategory } from '../interfaces/EmailCategory';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getEmailCategories(): Observable<EmailCategory[]> {
    return this.http.get<EmailCategory[]>('assets/responses/email-categories.json');
  }

  getEmails(): Observable<Email[]> {
    return this.http.get<{ messages: Email[] }>('assets/responses/emails.json').pipe(map((res) => res.messages));
  }
}
