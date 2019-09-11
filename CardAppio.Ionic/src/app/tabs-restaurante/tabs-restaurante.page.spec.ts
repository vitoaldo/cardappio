import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRestaurantePage } from './tabs-restaurante.page';

describe('TabsRestaurantePage', () => {
  let component: TabsRestaurantePage;
  let fixture: ComponentFixture<TabsRestaurantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsRestaurantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
