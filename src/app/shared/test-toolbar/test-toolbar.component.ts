import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-toolbar',
  templateUrl: './test-toolbar.component.html',
  styleUrls: ['./test-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
