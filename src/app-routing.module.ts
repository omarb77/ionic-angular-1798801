import { LoginPageModule } from './app/login/login.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'', redirectTo:'lugares', pathMatch:'full'},
{
  path:'login',
  loadChildren:()=> import('./app/login/login.module').then(m=> m.LoginPageModule)
},
{
  path:'lugares',
  loadChildren:()=> import('./app/lugares/lugares.module').then(m=> m.LugaresPageModule)
},
{
  path:'reservaciones',
  loadChildren:()=>import('./app/reservaciones/reservaciones.module').then(m=> m.ReservacionesPageModule)
},

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
