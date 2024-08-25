import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  credentials = { correo: '', contrasena: '' };
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.error = ''; 

    this.authService.login(this.credentials.correo, this.credentials.contrasena).subscribe({
      next: (response) => {
        // No es necesario manejar la redirección aquí, ya que se maneja en auth.service.ts
      },
      error: (err) => {
        this.error = err.message || 'Credenciales inválidas o error en el servidor';
        console.error('Error en la solicitud:', err);
      }
    });
  }
}
