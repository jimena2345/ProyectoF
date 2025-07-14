
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Registrar } from '../services/registrar';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {


  formularioRegistrar: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private registrarService: Registrar,) {
    this.formularioRegistrar = this.formBuilder.group({
      nombreCompleto: [''],
      correo: [''],
      contrasena: [''],
      pais: ['']
    })
  }


  irADestinos() {
  throw new Error('Method not implemented.');
  }
  style: any;
  mostrarFormulario = true;


  resgistrar(){
    this.registrarService.registrar(this.formularioRegistrar.value);
    console.log('click register', this.formularioRegistrar.value);
    this.formularioRegistrar.reset();
    this.mostrarFormulario = true;          // Oculta el formulario
  }

}
