import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======

>>>>>>> 410313d4de168cc3cc2f33538a16f0ea635f2051
import { IonicModule } from '@ionic/angular';

import { EditarOfertaPageRoutingModule } from './editar-oferta-routing.module';

import { EditarOfertaPage } from './editar-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarOfertaPageRoutingModule
  ],
  declarations: [EditarOfertaPage]
})
export class EditarOfertaPageModule {}
