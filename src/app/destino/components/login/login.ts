import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.loginForm = this.fb.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onLogin(): void {
  if (this.loginForm.valid) {
    const { correo, contrasena } = this.loginForm.value;

    this.http.post('http://localhost:3000/user/login', { correo, contrasena }).subscribe({
      next: (res: any) => {
        console.log('Usuario autenticado:', res.user);
        this.router.navigate(['/destinos']);
      },
      error: (err) => {
        console.warn('Falló el login:', err.error?.message || err.message);
        alert('Credenciales incorrectas');
      }
    });
  }
}
}

      
