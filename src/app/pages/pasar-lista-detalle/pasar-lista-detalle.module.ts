import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasarListaDetallePageRoutingModule } from './pasar-lista-detalle-routing.module';

import { PasarListaDetallePage } from './pasar-lista-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasarListaDetallePageRoutingModule
  ],
  declarations: [PasarListaDetallePage]
})
export class PasarListaDetallePageModule {}
