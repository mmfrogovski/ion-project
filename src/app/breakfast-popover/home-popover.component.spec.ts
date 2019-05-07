import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopoverComponent } from './home-popover.component';

describe('HomePopoverComponent', () => {
  let component: HomePopoverComponent;
  let fixture: ComponentFixture<HomePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
