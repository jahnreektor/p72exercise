import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-widget-stock-graph',
  templateUrl: './widget-stock-graph.component.html',
  styleUrls: ['./widget-stock-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetStockGraphComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#56CCF2',
      backgroundColor: 'transparent',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() {}

  ngOnInit(): void {}
}
