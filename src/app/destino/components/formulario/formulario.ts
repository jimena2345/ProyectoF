import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
     nombre: [ '', [Validators.required] ],
      correo: [ '', [Validators.required, Validators.email] ],
      destino: [ '', [Validators.required] ],
      experiencia: [ '', [Validators.required] ]
    })
  }
  contarExperiencia(){
    this.servicio.guardarRespuesta(this.miFormulario.value);
    // console.log('mi test', this.miFormulario.value);
      if (this.miFormulario.valid) {
    this.servicio.guardarRespuesta(this.miFormulario.value);
    alert('¡Experiencia registrada exitosamente!');
    this.limpiarFormulario();
  } else {
    alert('Por favor, completa todos los campos correctamente.');
    this.miFormulario.markAllAsTouched(); 
  }
}
limpiarFormulario() {
  console.log('Se hizo clic en Limpiar');
  this.miFormulario.reset();
}
verDatos() {
  console.log(this.miFormulario.value);
}
}
