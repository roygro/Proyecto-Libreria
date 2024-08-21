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
        console.log(response); // Verifica la respuesta aquí

        if (response && response.token && response.role !== undefined) {
          // Guardar el token y el rol en el almacenamiento local
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);

          // Redirigir en función de si el usuario tiene una biblioteca asociada
          if (response.hasLibrary) {
            this.router.navigate(['/administrador']);
          } else {
            this.router.navigate(['/home']);
          }
        } else {
          this.error = 'Respuesta del servidor no válida';
        }
      },
      error: (err) => {
        this.error = err.message || 'Credenciales inválidas o error en el servidor';
        console.error('Error en la solicitud:', err);
      }
    });
  }
}
