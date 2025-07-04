import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Destino } from './destino';
import { DetalleDestino } from './components/detalle-destino/detalle-destino';

const routes: Routes = [
  {
    path: '',
    component: Destino,
  },
  {
    path: 'detalle/:id',
    component: DetalleDestino
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinoRoutingModule { }
