import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 5, color: '#2A2E38' },
    { text: 'Two', cols: 1, rows: 2, color: '#2A2E38' },
    { text: 'Three', cols: 1, rows: 3, color: '#2A2E38' },
  ];
}
