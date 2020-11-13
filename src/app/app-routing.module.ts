import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanLoad } from '@angular/router';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'',
    redirectTo: 'lugares',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) 
  },
  {
    path: 'lugares',
    loadChildren: () => import('./lugares/lugares.module').then( m => m.LugaresPageModule), canLoad: [LoginGuard]
  },
  {
    path: 'reservaciones',
    loadChildren: () => import('./reservaciones/reservaciones.module').then( m => m.ReservacionesPageModule), canLoad: [LoginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
