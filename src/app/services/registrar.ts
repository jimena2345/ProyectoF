import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Registrar {

  constructor( private http: HttpClient) { }

  registrar(user: any){

    this.http.post('http://localhost:3000/user', user).subscribe({
      next: (response) => {
        console.log('Usuario registrado con éxito', response);
      },
      error: (error) => {
        console.error('Error al registrar usuario', error);
      }})

  }
}
