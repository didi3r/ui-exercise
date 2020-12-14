import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() label = '';
  @Input() color = '';

  constructor() {}

  ngOnInit(): void {
    this.color = this.color || 'orange';
  }
}
