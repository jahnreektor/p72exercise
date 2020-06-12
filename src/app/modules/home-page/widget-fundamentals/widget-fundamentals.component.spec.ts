import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFundamentalsComponent } from './widget-fundamentals.component';

describe('WidgetFundamentalsComponent', () => {
  let component: WidgetFundamentalsComponent;
  let fixture: ComponentFixture<WidgetFundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
