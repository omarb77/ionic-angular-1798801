import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarOfertaPage } from './editar-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: EditarOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarOfertaPageRoutingModule {}
