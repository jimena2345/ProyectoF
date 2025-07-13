import { Injectable } from '@angular/core';
import { Formulario } from '../interfaces/formulario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }
  
  guardar(opinion:any) {
    console.log("datos recibidos en el servicio:", opinion);
    
    return this.http.post('http://localhost:3000/opinion', opinion).subscribe({
      next: (response) => {
        console.log('Opinión guardada con éxito', response);
      },
      error: (error) => {
        console.error('Error al guardar opinión', error);
      }
    });
  }
  
}
