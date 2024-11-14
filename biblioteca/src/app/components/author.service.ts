import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private searchUrl = 'https://openlibrary.org/search/authors.json?'; // Endpoint de búsqueda de autores
  private authorDetailUrl = 'https://openlibrary.org/authors/'; // Endpoint para detalles de autor

  constructor(private http: HttpClient) { }

  // Método para buscar autores por nombre
  searchAuthors(query: string): Observable<any> {
    const url = `${this.searchUrl}q=${query}`;
    return this.http.get<any>(url);
  }

  // Método para obtener información detallada del autor usando su ID
  getAuthorDetails(authorKey: string): Observable<any> {
    const url = `${this.authorDetailUrl}${authorKey}.json`;
    return this.http.get<any>(url);
  }
}
