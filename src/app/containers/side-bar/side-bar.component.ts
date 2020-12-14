import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EmailCategory } from 'src/app/interfaces/EmailCategory';
import { ApiService } from 'src/app/services/api.service';
import { EmailsService } from 'src/app/services/emails.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  categories$ = new Subject<EmailCategory[]>();
  tags$ = new Subject<string[]>();

  constructor(private apiService: ApiService, private emails: EmailsService) {}

  ngOnInit(): void {
    this.apiService.getEmailCategories().subscribe((response) => this.categories$.next(response));
    this.tags$ = this.emails.tags$;
  }
}
