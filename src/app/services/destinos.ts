import { Injectable } from '@angular/core';
import { Destinos } from '../interfaces/destinos';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {
  private destinos: Destinos[] = [
    {
      id: 1,
      nombre: 'Basilica de Chiquinquira',
      descripcion: 'Lugar sagrado muy visitado por turistas.',
      imagen: 'basilica.jpg',
      precio: 10000
    },
    {
      id: 2,
      nombre: 'La Veranita',
      descripcion: 'Zona rural con aire puro y paisajes hermosos.',
      imagen: 'la veranita.jpg',
      precio: 15000
    },
    {
      id: 3,
      nombre: 'Pozo de la Virgen',
      descripcion: 'Una caminata inolvidable con vista panorámica.',
      imagen: 'pozo de la virgen.jpg',
      precio: 20000
    }
  ];

  getDestinos(): Destinos[] {
    return this.destinos;
  }

  getDestinoById(id: number): Destinos | undefined {
    return this.destinos.find(d => d.id === id);
  }
}