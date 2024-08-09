import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users'; // URL del backend

  constructor(private http: HttpClient) {}

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
      catchError(error => {
        console.error('Error en el inicio de sesión:', error);
        const errorMessage = error?.error?.message || 'Error en el inicio de sesión';
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  
}
