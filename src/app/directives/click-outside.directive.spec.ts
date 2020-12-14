import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickOutsideDirective } from './click-outside.directive';
@Component({
  template: `
    <div class="outside">
      <span>Outside</span>
      <div class="inside" (clickOutside)="onClickOutside()" [skipClicks]="0">
        Inside
        <div class="child">Child</div>
      </div>
    </div>
  `,
})
class TestComponent {
  onClickOutside() {}
}

describe('ClickOutsideDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let insideElement: DebugElement;
  let outsideElement: DebugElement;
  let childElement: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ClickOutsideDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();

    component = fixture.componentInstance;
    insideElement = fixture.debugElement.query(By.css('.inside'));
    outsideElement = fixture.debugElement.query(By.css('.outside'));
    childElement = fixture.debugElement.query(By.css('.child'));

    spyOn(component, 'onClickOutside');
  });

  it('should create an instance', () => {
    const directive = new ClickOutsideDirective({ nativeElement: {} });
    expect(directive).toBeTruthy();
  });

  it('should execute the callback when clicking a outside the element', () => {
    outsideElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.onClickOutside).toHaveBeenCalled();
  });

  it('should NOT execute the callback when clicking inside the element', () => {
    insideElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.onClickOutside).not.toHaveBeenCalled();
  });

  it('should NOT execute the callback when clicking a child the element', () => {
    childElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.onClickOutside).not.toHaveBeenCalled();
  });
});
