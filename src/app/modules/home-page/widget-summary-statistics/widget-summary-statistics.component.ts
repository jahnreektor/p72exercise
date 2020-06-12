import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-widget-summary-statistics',
  templateUrl: './widget-summary-statistics.component.html',
  styleUrls: ['./widget-summary-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetSummaryStatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
