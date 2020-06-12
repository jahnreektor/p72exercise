import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

const modules = [CommonModule];
const components = [ShellComponent];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...components],
})
export class CoreModule {}
