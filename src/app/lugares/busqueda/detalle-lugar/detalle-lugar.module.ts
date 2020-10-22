import { NuevaReservacionComponent } from './../../../reservaciones/nueva-reservacion/nueva-reservacion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleLugarPageRoutingModule } from './detalle-lugar-routing.module';

import { DetalleLugarPage } from './detalle-lugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleLugarPageRoutingModule
  ],
  declarations: [DetalleLugarPage, NuevaReservacionComponent],
  entryComponents: [NuevaReservacionComponent]
})
export class DetalleLugarPageModule {}
