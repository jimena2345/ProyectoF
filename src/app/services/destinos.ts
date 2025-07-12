import { Injectable } from '@angular/core';
import { Destinos } from '../interfaces/destinos';

@Injectable({
  providedIn: 'root',
})
export class DestinosService {
  private destinos: Destinos[] = [
    {
      id: 1,
      nombre: 'Basilica de Chiquinquira',
      descripcion:
        'Lugar sagrado y emblemático, muy visitado por turistas y peregrinos',
      imagen: 'basilica.jpg',
      color: '#cb6ce6',
      valor: '$150.000',
    },
    {
      id: 2,
      nombre: 'La Veranita',
      descripcion:
        'Zona natural rodeada de vegetación y agua cristalina, ideal para descansar y disfrutar en familia.',
      imagen: 'laveranita.jpg',
      color: '#60a5fa',
    },
    {
      id: 3,
      nombre: 'Pozo de la Virgen',
      descripcion:
        'Sitio natural de gran valor espiritual, rodeado de leyendas y aguas cristalinas.',
      imagen: 'pozodelavirgen.jpg',
      color: '#34d399',
    },
    {
      id: 4,
      nombre: 'Mirador Los Currucuyes',
      descripcion:
        'Punto panorámico con vistas espectaculares de Chiquinquirá y sus paisajes naturales.',
      imagen: 'loscurrucuyes.jpg',
      color: '#818cf8',
    },
    {
      id: 5,
      nombre: 'Mirador la Chucharita',
      descripcion:
        'Mirador campestre con una vista tranquila, ideal para conectarse con la naturaleza.',
      imagen: 'lacucharita.jpg',
      color: '#f87171',
    },
    {
      id: 6,
      nombre: 'Parque La Cabañita',
      descripcion:
        'Espacio familiar con zonas verdes y juegos, perfecto para disfrutar al aire libre.',
      imagen: 'lacabañita.jpg',
      color: '#fbbf24',
    },
    {
      id: 7,
      nombre: 'Palacio de la Cultura',
      descripcion:
        'Centro cultural que resalta el arte, la historia y las tradiciones de Chiquinquirá.',
      imagen: 'palaciodelacultura.jpg',
      color: '#a78bfa',
    },
    {
      id: 8,
      nombre: 'Parque Julio Florez',
      descripcion:
        'Espacio emblemático en honor al poeta Julio Flórez, ideal para el descanso y la contemplación.',
      imagen: 'julioflorez.jpg',
      color: '#38bdf8',
    },
  ];

  getDestinos(): Destinos[] {
    return this.destinos;
  }

  getDestinoById(id: number): Destinos | undefined {
    return this.destinos.find((d) => d.id === id);
  }
}
