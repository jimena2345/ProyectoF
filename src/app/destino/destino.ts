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
  destinos: Destinos[] = [];

  constructor(private destinosService: DestinosService, private router: Router) {}

  ngOnInit(): void {
    this.destinos = this.destinosService.getDestinos();
  }

  verDetalle(id: number) {
    this.router.navigate(['/destinos/detalle', id]);
  }
}
