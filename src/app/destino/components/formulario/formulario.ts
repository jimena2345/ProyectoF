import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormularioService } from '../../../services/formulario';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss'
})
export class Formulario {

  miFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private servicio: FormularioService){
    this.miFormulario = this.formBuilder.group({
      nombre: [''],
      correo: [''],
      destino: [''],
      experiencia: [''],
    })
  }

  contarExperiencia(){
    this.servicio.guardarRespuesta(this.miFormulario.value);
    // console.log('mi test', this.miFormulario.value);
  }

}
