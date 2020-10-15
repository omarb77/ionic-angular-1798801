import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarOfertaPageRoutingModule } from './editar-oferta-routing.module';

import { EditarOfertaPage } from './editar-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarOfertaPageRoutingModule
  ],
  declarations: [EditarOfertaPage]
})
export class EditarOfertaPageModule {}
