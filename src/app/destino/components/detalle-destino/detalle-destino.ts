import { Component, inject } from '@angular/core';
import { Destinos } from '../../../interfaces/destinos';
import { ActivatedRoute } from '@angular/router';
import { DestinosService } from '../../../services/destinos';
import { MatDialog } from '@angular/material/dialog';
import { Formulario } from '../formulario/formulario';

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
