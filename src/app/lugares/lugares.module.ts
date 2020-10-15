import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresPageRoutingModule } from './lugares-routing.module';

import { LugaresPage } from './lugares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresPageRoutingModule
  ],
  declarations: [LugaresPage]
})
export class LugaresPageModule {}
