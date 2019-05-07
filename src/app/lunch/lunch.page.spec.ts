import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchPage } from './lunch.page';

describe('LunchPage', () => {
  let component: LunchPage;
  let fixture: ComponentFixture<LunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
