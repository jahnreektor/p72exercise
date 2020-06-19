import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HomePageRoutingModule } from './home-page/home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { WidgetFundamentalsComponent } from './widget-fundamentals/widget-fundamentals.component';
import { WidgetStockGraphComponent } from './widget-stock-graph/widget-stock-graph.component';
import { WidgetSummaryStatisticsComponent } from './widget-summary-statistics/widget-summary-statistics.component';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule } from 'ng2-charts';

const modules = [
  CommonModule,
  SharedModule,
  HomePageRoutingModule,
  HighchartsChartModule,
  ChartsModule,
];
const components = [
  HomePageComponent,
  WidgetStockGraphComponent,
  WidgetFundamentalsComponent,
  WidgetSummaryStatisticsComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class HomePageModule {}
