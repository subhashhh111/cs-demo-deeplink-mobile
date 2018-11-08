import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowPage } from './yellow.page';

describe('YellowPage', () => {
  let component: YellowPage;
  let fixture: ComponentFixture<YellowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
