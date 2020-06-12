import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { WidgetFundamentalsComponent } from './widget-fundamentals/widget-fundamentals.component';
import { WidgetStockGraphComponent } from './widget-stock-graph/widget-stock-graph.component';
import { WidgetSummaryStatisticsComponent } from './widget-summary-statistics/widget-summary-statistics.component';

const modules = [CommonModule, SharedModule];
@NgModule({
  declarations: [
    HomePageComponent,
    WidgetStockGraphComponent,
    WidgetSummaryStatisticsComponent,
    WidgetFundamentalsComponent,
  ],
  imports: [...modules],
})
export class HomePageModule {}
