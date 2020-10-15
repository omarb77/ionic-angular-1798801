import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasPage } from './ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasPage
  },
  {
    path: 'nueva-oferta',
    loadChildren: () => import('./nueva-oferta/nueva-oferta.module').then( m => m.NuevaOfertaPageModule)
  },
  {
    path: 'editar-oferta',
    loadChildren: () => import('./editar-oferta/editar-oferta.module').then( m => m.EditarOfertaPageModule)
  },
  {
    path: 'reservar-oferta',
    loadChildren: () => import('./reservar-oferta/reservar-oferta.module').then( m => m.ReservarOfertaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasPageRoutingModule {}
