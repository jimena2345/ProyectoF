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
  selectedFile: File | null = null; // ¡Esta propiedad es crucial!

  constructor(private fb: FormBuilder, private experienciaService: FormularioService) {
    // Inicializa tu formulario en el constructor
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      destino: ['', Validators.required],
      experiencia: ['', [Validators.required, Validators.minLength(20)]],
      // Si por alguna razón agregaste 'foto' aquí, quítalo si vas a usar `selectedFile` por separado
      // foto: [''] // No es necesario si manejas el archivo como `selectedFile`
    });
  }


  //  MÉTODO: SubirFoto
  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
      console.log('Archivo seleccionado:', this.selectedFile.name);
    } else {
      this.selectedFile = null;
    }
  }

  // Tu método contarExperiencia()
  contarExperiencia(): void {
    if (this.miFormulario.valid) {
      const formData = new FormData();
      // const datos = this.miFormulario.value;

      // Agrega los valores del formulario
      formData.append('nombre', this.miFormulario.get('nombre')?.value);
      formData.append('correo', this.miFormulario.get('correo')?.value);
      formData.append('destino', this.miFormulario.get('destino')?.value);
      formData.append('experiencia', this.miFormulario.get('experiencia')?.value);

      // Si hay una foto seleccionada, la agregamos al FormData
      if (this.selectedFile) {
        formData.append('foto', this.selectedFile, this.selectedFile.name);
      }
      this.experienciaService.guardar(formData);

    }
  }

  // *** MÉTODO QUE FALTA: resetForm() ***
  resetForm(): void {
    this.miFormulario.reset(); // Resetea los controles del formulario
    this.selectedFile = null;  // ¡Importante! También limpia el archivo seleccionado
    // Si quieres resetear a valores predeterminados específicos, usa patchValue:
    // this.miFormulario.patchValue({
    //   nombre: '',
    //   correo: '',
    //   destino: '',
    //   experiencia: ''
    // });
  }
}