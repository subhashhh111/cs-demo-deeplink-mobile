import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OolongPage } from './oolong.page';

describe('OolongPage', () => {
  let component: OolongPage;
  let fixture: ComponentFixture<OolongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OolongPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OolongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
