import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaOfertaPage } from './nueva-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaOfertaPageRoutingModule {}
