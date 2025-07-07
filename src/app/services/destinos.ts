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
      descripcion: 'Lugar sagrado y emblemático, muy visitado por turistas y peregrinos',
      imagen: 'basilica.jpg',
      // precio: 10000
    },
    {
      id: 2,
      nombre: 'La Veranita',
      descripcion: 'Zona natural rodeada de vegetación y agua cristalina, ideal para descansar y disfrutar en familia.',
      imagen: 'la veranita.jpg',
      // precio: 15000
    },
    {
      id: 3,
      nombre: 'Pozo de la Virgen',
      descripcion: 'Sitio natural de gran valor espiritual, rodeado de leyendas y aguas cristalinas.',
      imagen: 'pozo de la virgen.jpg',
      // precio: 20000
    },
      {
      id: 4,
      nombre: 'Mirador Los Currucuyes',
      descripcion: 'Punto panorámico con vistas espectaculares de Chiquinquirá y sus paisajes naturales.',
      imagen: 'los currucuyes.jpg',
      // precio: 20000
    },
       {
      id: 5,
      nombre: 'Mirador la Chucharita',
      descripcion: 'Mirador campestre con una vista tranquila, ideal para conectarse con la naturaleza.',
      imagen: 'la cucharita.jpg',
      // precio: 20000
    },
     {
      id: 6,
      nombre: 'Parque La Cabañita',
      descripcion: 'Espacio familiar con zonas verdes y juegos, perfecto para disfrutar al aire libre.',
      imagen: 'la cabañita.jpg',
      // precio: 20000
    },
     {
      id: 7,
      nombre: 'Palacio de la Cultura',
      descripcion: 'Centro cultural que resalta el arte, la historia y las tradiciones de Chiquinquirá.',
      imagen: 'palacio de la cultura.jpg',
      // precio: 10000
    },
    {
      id: 8,
      nombre: 'Parque Julio Florez',
      descripcion: 'Espacio emblemático en honor al poeta Julio Flórez, ideal para el descanso y la contemplación.',
      imagen: 'julio florez.jpg',
      // precio: 10000
    },
  ];

  getDestinos(): Destinos[] {
    return this.destinos;
  }

  getDestinoById(id: number): Destinos | undefined {
    return this.destinos.find(d => d.id === id);
  }
}