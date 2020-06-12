import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-widget-fundamentals',
  templateUrl: './widget-fundamentals.component.html',
  styleUrls: ['./widget-fundamentals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetFundamentalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
