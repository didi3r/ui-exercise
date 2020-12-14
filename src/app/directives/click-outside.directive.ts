import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  @Input() skipClicks = 1;

  @Output() clickOutside = new EventEmitter();

  currentSkips = 0;

  constructor(private _elementRef: ElementRef) {
    console.log('hola');
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any): void {
    this.currentSkips++;
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && this.currentSkips > this.skipClicks) {
      this.clickOutside.emit(null);
    }
  }
}
