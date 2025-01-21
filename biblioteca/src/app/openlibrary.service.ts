import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

  private apiUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  // Método para obtener detalles de un autor
  getAuthorDetails(authorKey: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/authors/${authorKey}.json`);
  }

  // Método para obtener las obras del autor
  getAuthorWorks(authorKey: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/authors/${authorKey}/works.json`);
  }
}
