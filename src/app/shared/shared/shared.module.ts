import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { TestToolbarComponent } from '../test-toolbar/test-toolbar.component';

const modules = [CommonModule, MaterialModule, RouterModule];
const components = [TestToolbarComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
