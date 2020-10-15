import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaOfertaPageRoutingModule } from './nueva-oferta-routing.module';

import { NuevaOfertaPage } from './nueva-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaOfertaPageRoutingModule
  ],
  declarations: [NuevaOfertaPage]
})
export class NuevaOfertaPageModule {}
