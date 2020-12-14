import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Email } from 'src/app/interfaces/Email';
import { EmailsService } from 'src/app/services/emails.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss'],
})
export class EmailListComponent implements OnInit {
  emails: Email[] = [];
  total = 0;
  selected: string[] = [];
  tag = '';

  constructor(private activatedRoute: ActivatedRoute, private emailService: EmailsService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.tag = params.get('tag') || '';
    });
  }

  ngOnInit(): void {
    this.emailService.emails$.subscribe((emails) => {
      this.total = emails.length;
      this.emails = emails;
    });
  }

  checkAll(checked: boolean): void {
    if (checked) {
      const ids = this.emails.map((e) => e.id);
      this.selected = ids;
    } else {
      this.selected = [];
    }
  }

  select(id: string): void {
    if (id) {
      this.selected.push(id);
      this.selected = this.selected.filter((item, pos) => this.selected.indexOf(item) == pos);
    }
  }

  deselect(id: string): void {
    if (id) {
      this.selected = this.selected.filter((emailId) => emailId !== id);
    }
  }

  isSelected(id: string): boolean {
    return this.selected.indexOf(id) > -1;
  }

  delete(): void {
    this.emails = this.emails.filter((e) => this.selected.indexOf(e.id) === -1);
    this.selected = [];
  }
}
