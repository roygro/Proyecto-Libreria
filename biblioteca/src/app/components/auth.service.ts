import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users'; // URL del backend

  constructor(private http: HttpClient, private router: Router) {}

  register(nombre: string, correo: string, telefono: string, contrasena: string): Observable<any> {
    const body = { nombre, correo, telefono, contrasena };
    return this.http.post<any>(`${this.apiUrl}/register`, body).pipe(
      catchError(error => {
        console.error('Error en el registro:', error);
        return throwError(() => new Error('Error en el registro'));
      })
    );
  }

  login(correo: string, contrasena: string): Observable<any> {
    const body = { correo, contrasena };
    return this.http.post<any>(`${this.apiUrl}/login`, body).pipe(
      tap(response => {
        console.log('Response:', response); // Verifica los datos de respuesta
  
        // Guardar el token, el rol y el correo electrónico en el almacenamiento local
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        localStorage.setItem('email', response.email); // Guardar el correo electrónico

        // Guardar el idLibrary en el almacenamiento local si está presente
        if (response.idLibrary) {
          localStorage.setItem('idLibrary', response.idLibrary);
        }
  
        // Redirigir según el rol del usuario
        const role = response.role;
        const idLibrary = response.idLibrary; // Obtén el idLibrary
        const hasLibrary = response.hasLibrary; // Verifica si el usuario tiene biblioteca
  
        if (role === 'user') {
          this.router.navigate(['/home']);
        } else if (role === 'admin') {
          if (hasLibrary) {
            this.router.navigate([`/administradorBiblioteca/${idLibrary}`]); // Redirige con el idLibrary
          } else {
            console.error('El usuario no tiene una biblioteca asociada.');
            // Maneja el caso donde no hay biblioteca asociada, redirigiendo o mostrando un mensaje
          }
        } else if (role === 'superAdmin') {
          this.router.navigate(['/superAdmin']);
        } else {
          console.error('Rol desconocido:', role); // Agregar esta línea para casos inesperados
        }
      }),
      catchError(error => {
        console.error('Error en el inicio de sesión:', error);
        const errorMessage = error?.error?.message || 'Error en el inicio de sesión';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // Verificar si el usuario es administrador
  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role === 'admin';
  }

  getLibraryId(): string | null {
    return localStorage.getItem('idLibrary');
  }

  // Obtener el correo electrónico del usuario autenticado
  getUserEmail(): string {
    return localStorage.getItem('email') || '';
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken(); // Verifica si el token existe
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('idLibrary'); // Elimina también idLibrary
    this.router.navigate(['/login']); // Redirigir al login después de cerrar sesión
  }


  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
