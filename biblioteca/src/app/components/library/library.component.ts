import { Component } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  library = {
    nombre: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    colonia: '',
    calle: '',
    numero: '',
    tarjeta: ''
  };
  error: string = '';

  constructor(private libraryService: LibraryService, private router: Router) {}

  onSubmit() {
    if (this.library.contrasena !== this.library.confirmarContrasena) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    const { confirmarContrasena, ...libraryData } = this.library;

    this.libraryService.addLibrary(libraryData).subscribe({
      next: () => {
        this.router.navigate(['/']); // Redirige después de registrar
      },
      error: (err) => {
        if (err.message === 'Correo no registrado') {
          this.error = 'Este correo no está registrado, por favor regístrese con un correo válido';
        } else {
          this.error = 'Error al registrar la biblioteca';
        }
        console.error('Error en la solicitud:', err);
      }
    });
  }
}
