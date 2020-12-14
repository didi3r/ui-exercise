import { Component, Input, OnInit } from '@angular/core';
import { EmailCategory } from 'src/app/interfaces/EmailCategory';
import { generateTagColor } from 'src/app/utils/tags';

@Component({
  selector: 'app-email-categories',
  templateUrl: './email-categories.component.html',
  styleUrls: ['./email-categories.component.scss'],
})
export class EmailCategoriesComponent implements OnInit {
  @Input() categories: EmailCategory[] = [];
  @Input() tags: string[] = [];

  active = 'INBOX';

  constructor() {}

  ngOnInit(): void {}

  getTagColor(tagName: string): string {
    return generateTagColor(tagName) || '';
  }
}
