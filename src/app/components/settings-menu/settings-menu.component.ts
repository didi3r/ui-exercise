import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss'],
})
export class SettingsMenuComponent implements OnInit {
  opened = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.opened = true;
  }

  onClickOutside() {
    this.opened = false;
  }
}
