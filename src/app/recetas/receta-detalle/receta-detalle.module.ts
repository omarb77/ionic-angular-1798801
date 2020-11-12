import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaDetallePageRoutingModule } from './receta-detalle-routing.module';

import { RecetaDetallePage } from './receta-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaDetallePageRoutingModule
  ],
  declarations: [RecetaDetallePage]
})
export class RecetaDetallePageModule {}
