import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocentelistPage } from './docentelist.page';

const routes: Routes = [
  {
    path: '',
    component: DocentelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocentelistPageRoutingModule {}
