import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStockGraphComponent } from './widget-stock-graph.component';

describe('WidgetStockGraphComponent', () => {
  let component: WidgetStockGraphComponent;
  let fixture: ComponentFixture<WidgetStockGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetStockGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStockGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
