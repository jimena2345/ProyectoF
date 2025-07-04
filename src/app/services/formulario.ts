import { Injectable } from '@angular/core';
import { Formulario } from '../interfaces/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private respuestas: Formulario[] = [];

  guardarRespuesta(data: Formulario) {
    this.respuestas.push(data);
    console.log('Respuestas guardadas:', this.respuestas);
  }

  obtenerRespuestas(): Formulario[] {
    return this.respuestas;
  }
}
