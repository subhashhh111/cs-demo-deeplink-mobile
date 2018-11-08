import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePage } from './white.page';

describe('WhitePage', () => {
  let component: WhitePage;
  let fixture: ComponentFixture<WhitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
