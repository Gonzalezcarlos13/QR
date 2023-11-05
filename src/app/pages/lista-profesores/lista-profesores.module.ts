import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProfesoresPageRoutingModule } from './lista-profesores-routing.module';

import { ListaProfesoresPage } from './lista-profesores.page';

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProfesoresPageRoutingModule,
    QRCodeModule,
  ],
  declarations: [ListaProfesoresPage]
})
export class ListaProfesoresPageModule {}
