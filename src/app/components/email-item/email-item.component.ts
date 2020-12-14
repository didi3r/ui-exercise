/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from 'src/app/interfaces/Email';
import { generateTagColor } from 'src/app/utils/tags';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss'],
})
export class EmailItemComponent implements OnInit {
  @Input() email: Email | null = null;
  @Input() selected = false;

  @Output() onSelect = new EventEmitter<string>();
  @Output() onDeselect = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  getTagColor(tagName: string): string | null {
    return generateTagColor(tagName);
  }

  onChecked(checked: boolean): void {
    this.selected = checked;
    if (checked) {
      this.onSelect.emit(this.email?.id);
    } else {
      this.onDeselect.emit(this.email?.id);
    }
  }
}
