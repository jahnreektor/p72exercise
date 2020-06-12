import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-widget-stock-graph',
  templateUrl: './widget-stock-graph.component.html',
  styleUrls: ['./widget-stock-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetStockGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
