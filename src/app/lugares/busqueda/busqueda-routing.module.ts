import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaPage } from './busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaPage
  },
  {
    path: 'detalle-lugar',
    loadChildren: () => import('./detalle-lugar/detalle-lugar.module').then( m => m.DetalleLugarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaPageRoutingModule {}
