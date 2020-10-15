import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarOfertaPage } from './reservar-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarOfertaPageRoutingModule {}
