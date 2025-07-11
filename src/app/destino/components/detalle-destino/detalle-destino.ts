import { Component, inject } from '@angular/core';
import { Destinos } from '../../../interfaces/destinos';
import { ActivatedRoute } from '@angular/router';
import { DestinosService } from '../../../services/destinos';
import { MatDialog } from '@angular/material/dialog';
import { Formulario } from '../formulario/formulario';

import * as L from 'leaflet';

@Component({
  selector: 'app-detalle-destino',
  standalone: false,
  templateUrl: './detalle-destino.html',
  styleUrl: './detalle-destino.scss'
})
export class DetalleDestino {
  destino!: Destinos;
  readonly dialog = inject(MatDialog);

  constructor(
    private route: ActivatedRoute,
    private destinosService: DestinosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const data = this.destinosService.getDestinoById(id);
    if (data) {
      this.destino = data;
    }

    const map = L.map('map').setView([5.618, -73.819], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([5.618, -73.819]).addTo(map)
      .bindPopup('Chiquinquirá')
      .openPopup();
  }
 openDialog(enterAnimationDuration: string, exitAnimationDuration: string ): void {
    this.dialog.open(Formulario, {
      width: '350px',
      height: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
