import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
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
    return this.http.post<any>(this.apiUrl, book).pipe(
      catchError(error => {
        console.error('Error al crear el libro:', error);
        return throwError(() => new Error('Error al crear el libro'));
      })
    );
  }

  updateBook(id: number, bookData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, bookData).pipe(
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
}
