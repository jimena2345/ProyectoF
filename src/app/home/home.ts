import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {


  formularioRegistrar: FormGroup;
  
  constructor(private formBuilder: FormBuilder){
    this.formularioRegistrar = this.formBuilder.group({
      nombre: [''],
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


    console.log('click register', this.formularioRegistrar.value);
    this.formularioRegistrar.reset();

  }

}
