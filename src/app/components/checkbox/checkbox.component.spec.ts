import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  let checkboxElement: DebugElement;
  let inputElement: DebugElement;
  let onCheckSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    checkboxElement = fixture.debugElement.query(By.css('.checkbox'));
    inputElement = fixture.debugElement.query(By.css('.checkbox input'));

    onCheckSpy = spyOn(component.onCheck, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be checked if the checked Input is true', () => {
    component.checked = true;
    fixture.detectChanges();
    expect(inputElement.nativeElement.checked).toBe(true);
  });

  it('should be unchecked if the checked Input is false', () => {
    component.checked = false;
    fixture.detectChanges();
    expect(inputElement.nativeElement.checked).toBe(false);
  });

  it('should update the native input state when clicked', () => {
    checkboxElement.nativeElement.click();
    fixture.detectChanges();
    expect(inputElement.nativeElement.checked).toBe(true);

    checkboxElement.nativeElement.click();
    fixture.detectChanges();
    expect(inputElement.nativeElement.checked).toBe(false);
  });

  it('should emit when the checkbox is checked/unchecked', () => {
    checkboxElement.nativeElement.click();
    fixture.detectChanges();
    expect(onCheckSpy).toHaveBeenCalled();
  });

  it('should have the checked class modifier when checkbox is checked', () => {
    checkboxElement.nativeElement.click();
    fixture.detectChanges();
    checkboxElement.nativeElement.classList.contains('checkbox--checked');
  });

  it('should have the checked class modifier when checkbox is checked', () => {
    checkboxElement.nativeElement.click();
    fixture.detectChanges();
    checkboxElement.nativeElement.classList.contains('checkbox--checked');
  });

  it('should be in indeterminate state if the indeterminate Input is true', () => {
    component.indeterminate = true;
    fixture.detectChanges();
    expect(checkboxElement.nativeElement.classList.contains('checkbox--indeterminate')).toBe(true);
  });

  it('should NOT be in indeterminate state if the indeterminate Input is false', () => {
    component.indeterminate = false;
    fixture.detectChanges();
    expect(checkboxElement.nativeElement.classList.contains('checkbox--indeterminate')).toBe(false);
  });
});
