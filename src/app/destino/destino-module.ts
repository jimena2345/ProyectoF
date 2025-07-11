import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinoRoutingModule } from './destino-routing-module';
import { Destino } from './destino';
import { DetalleDestino } from './components/detalle-destino/detalle-destino';
import { MaterialModule } from '../material/material.module';
import { Formulario } from './components/formulario/formulario';
import { ReactiveFormsModule } from '@angular/forms';

// import { DestinoColor } from './components/destino.color/destino.color';


@NgModule({
  declarations: [
    Destino,
    DetalleDestino,
    Formulario,
  ],
  imports: [
    CommonModule,
    DestinoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class DestinoModule { }
