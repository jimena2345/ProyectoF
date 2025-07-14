import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './destino/components/login/login';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home-module').then(m => m.HomeModule)
  },
  { path: 'login', component: Login },
  {
    path: 'destinos',
    loadChildren: () => import('./destino/destino-module').then(m => m.DestinoModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
