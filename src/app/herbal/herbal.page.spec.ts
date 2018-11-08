import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbalPage } from './herbal.page';

describe('HerbalPage', () => {
  let component: HerbalPage;
  let fixture: ComponentFixture<HerbalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
