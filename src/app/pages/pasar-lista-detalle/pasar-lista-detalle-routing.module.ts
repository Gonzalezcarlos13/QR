import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasarListaDetallePage } from './pasar-lista-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PasarListaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasarListaDetallePageRoutingModule {}
