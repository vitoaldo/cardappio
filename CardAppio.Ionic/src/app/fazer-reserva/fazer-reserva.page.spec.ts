import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerReservaPage } from './fazer-reserva.page';

describe('FazerReservaPage', () => {
  let component: FazerReservaPage;
  let fixture: ComponentFixture<FazerReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazerReservaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazerReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
