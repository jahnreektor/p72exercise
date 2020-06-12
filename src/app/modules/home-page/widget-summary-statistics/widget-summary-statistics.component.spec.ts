import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSummaryStatisticsComponent } from './widget-summary-statistics.component';

describe('WidgetSummaryStatisticsComponent', () => {
  let component: WidgetSummaryStatisticsComponent;
  let fixture: ComponentFixture<WidgetSummaryStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSummaryStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSummaryStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
