import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: HomePageComponent,
    loadChildren: () =>
      import('./modules/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'audit',
    loadChildren: () =>
      import('./audit/audit.module').then((m) => m.AuditModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
