import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/api/books'; // Ajusta la URL según tu API

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener los libros:', error);
        return throwError(() => new Error('Error al obtener los libros'));
      })
    );
  }

  getBookById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error al obtener el libro:', error);
        return throwError(() => new Error('Error al obtener el libro'));
      })
    );
  }

  addBook(book: any): Observable<any> {
    return this.http.post(this.apiUrl, book).pipe(
      catchError(error => {
        console.error('Error en el servicio al agregar el libro:', error);
        return throwError(() => new Error('Error al agregar el libro'));
      })
    );
  }  

  updateBook(id: number, book: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, book).pipe(
      catchError(error => {
        console.error('Error al actualizar el libro:', error);
        return throwError(() => new Error('Error al actualizar el libro'));
      })
    );
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error al eliminar el libro:', error);
        return throwError(() => new Error('Error al eliminar el libro'));
      })
    );
  }
  
  getBooksByLibraryId(idLibrary: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/library/${idLibrary}`).pipe(
      catchError(error => {
        console.error('Error al obtener los libros de la biblioteca:', error);
        return throwError(() => new Error('Error al obtener los libros de la biblioteca'));
      })
    );
  }
  
  
}
