import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  private searchUrl = 'https://openlibrary.org/search.json';
  private detailsUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  // Método para buscar libros
  searchBooks(query: string): Observable<any> {
    return this.http.get<any>(`${this.searchUrl}?q=${query}`);
  }

  // Método para obtener detalles del libro
  getBookDetails(bookKey: string): Observable<any> {
    return this.http.get<any>(`${this.detailsUrl}${bookKey}.json`);
  }
}
