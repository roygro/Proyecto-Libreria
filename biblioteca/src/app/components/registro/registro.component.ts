import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  user = {
    nombre: '',
    correo: '',
    telefono: '',
    contrasena: '',
    confirmarContrasena: ''
  };

  mensaje: string = ''; // Variable para mensajes de error o éxito

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.validateInputs()) {
      this.authService.register(
        this.user.nombre,
        this.user.correo,
        this.user.telefono,
        this.user.contrasena // Envía solo contrasena, no confirmarContrasena
      ).subscribe({
        next: () => {
          this.mensaje = 'Registro exitoso. Redirigiendo...';
          setTimeout(() => this.router.navigate(['/inicioSesion']), 2000); // Redirige después de 2 segundos
        },
        error: (err) => {
          this.mensaje = 'Error en el registro: ' + (err.error.message || 'Ocurrió un error inesperado');
        }
      });
    } else {
      this.mensaje = 'Por favor, complete todos los campos correctamente.';
    }
  }

  onVolver() {
    this.router.navigate(['/inicioSesion']);
  }

  validateInputs(): boolean {
    const { nombre, correo, telefono, contrasena, confirmarContrasena } = this.user;
    return nombre.trim() !== '' &&
           this.validateEmail(correo) &&
           telefono.trim() !== '' &&
           contrasena.trim() !== '' &&
           contrasena === confirmarContrasena;
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]{2,}))$/i;
    return re.test(String(email).toLowerCase());
  }
}
