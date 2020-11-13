import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaDetallePage } from './receta-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaDetallePageRoutingModule {}
