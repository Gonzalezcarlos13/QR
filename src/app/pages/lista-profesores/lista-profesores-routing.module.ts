import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProfesoresPage } from './lista-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProfesoresPageRoutingModule {}
