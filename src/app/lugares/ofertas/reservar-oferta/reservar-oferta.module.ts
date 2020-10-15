import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarOfertaPageRoutingModule } from './reservar-oferta-routing.module';

import { ReservarOfertaPage } from './reservar-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarOfertaPageRoutingModule
  ],
  declarations: [ReservarOfertaPage]
})
export class ReservarOfertaPageModule {}
