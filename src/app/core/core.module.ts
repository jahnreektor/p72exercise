import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import { MaterialModule } from '../shared/material/material.module';

const modules = [CommonModule, MaterialModule];
const components = [ShellComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class CoreModule {}
