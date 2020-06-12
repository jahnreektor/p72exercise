import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatCardModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
];
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [],
})
export class MaterialModule {}
