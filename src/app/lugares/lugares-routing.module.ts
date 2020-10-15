import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresPage } from './lugares.page';

const routes01: Routes = [
  {
    path: '',
    component: LugaresPage
  }
];

const routes: Routes = [
  {
    path: 'tabs',
    component: LugaresPage,
    children: [
      {
        path: 'busqueda',
        children: [
          {
            path: '',
            loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
          },
          {
            path: ':lugarId',
            loadChildren: () => import('./busqueda/detalle-lugar/detalle-lugar.module').then( m => m.DetalleLugarPageModule)
          }          
        ]
      },
      {
        path: 'ofertas',
        children: [
          {
            path: '',
            loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./ofertas/nueva-oferta/nueva-oferta.module').then( m => m.NuevaOfertaPageModule)
          },
          {
            path: 'edit/:lugarId',
            loadChildren: () => import('./ofertas/editar-oferta/editar-oferta.module').then( m => m.EditarOfertaPageModule)
          },
          {
            path: ':lugarId',
            loadChildren: () => import('./ofertas/reservar-oferta/reservar-oferta.module').then(m => m.ReservarOfertaPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/lugares/tabs/busqueda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/lugares/tabs/busqueda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresPageRoutingModule {}
