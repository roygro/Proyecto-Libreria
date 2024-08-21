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
        // Guardar el token y role en el almacenamiento local
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);

        // Redirigir según si el usuario tiene una biblioteca asociada
        if (response.hasLibrary) {
          this.router.navigate(['/administrador']);
        } else {
          this.router.navigate(['/home']);
        }
      }),
      catchError(error => {
        console.error('Error en el inicio de sesión:', error);
        const errorMessage = error?.error?.message || 'Error en el inicio de sesión';
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
