import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastPage } from './breakfast.page';

describe('BreakfastPage', () => {
  let component: BreakfastPage;
  let fixture: ComponentFixture<BreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
