import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() label = '';
  @Input() checked = false;
  @Input() indeterminate = false;

  @Output() onCheck = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    this.checked = event.target.checked || false;
    this.onCheck.emit(this.checked);
  }
}
