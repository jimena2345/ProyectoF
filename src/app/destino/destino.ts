import { Component } from '@angular/core';
import { Destinos } from '../interfaces/destinos';
import { DestinosService } from '../services/destinos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destino',
  standalone: false,
  templateUrl: './destino.html',
  styleUrl: './destino.scss'
})
export class Destino {
[x: string]: any;

  destinos: Destinos[] = [];
  carrito: Destinos[] = []; 

  constructor(private destinosService: DestinosService, private router: Router) {}

  ngOnInit(): void {
    this.destinos = this.destinosService.getDestinos();
  }

  verDetalle(id: number) {
    this.router.navigate(['/destinos/detalle', id]);
  }

  agregarAlCarrito(destino: Destinos) {
    this.carrito.push(destino);
  }

  verCarrito() {
    console.log('Carrito:', this.carrito);
  }

  pagar() {
    const total = this.carrito.reduce((sum, item) => sum + (item.precio || 0), 0);
    alert(`Compra realizada. Total: $${total}`);
    this.carrito = []; 
  }
  getTotal(): number {
    return this.carrito.reduce((total, item) => total + item.precio, 0);
  }

}