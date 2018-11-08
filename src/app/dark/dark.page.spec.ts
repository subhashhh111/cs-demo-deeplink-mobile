import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkPage } from './dark.page';

describe('DarkPage', () => {
  let component: DarkPage;
  let fixture: ComponentFixture<DarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
