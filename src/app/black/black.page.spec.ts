import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPage } from './black.page';

describe('BlackPage', () => {
  let component: BlackPage;
  let fixture: ComponentFixture<BlackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
