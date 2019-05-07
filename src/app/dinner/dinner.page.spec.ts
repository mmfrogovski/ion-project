import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerPage } from './dinner.page';

describe('DinnerPage', () => {
  let component: DinnerPage;
  let fixture: ComponentFixture<DinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
