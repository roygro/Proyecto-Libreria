// src/app/google.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define la estructura de la respuesta de la API
interface GoogleBooksResponse {
  items: Array<{
    volumeInfo: {
      title: string;
      authors: string[];
      description: string;
      imageLinks: {
        thumbnail: string;
      };
    };
  }>;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';  
  private apiKey = 'AIzaSyDSoyCcOGoE38ovLwRHqMCATyDdoHfkyzE';  

  constructor(private http: HttpClient) {}

  // Método para buscar libros en Google Books
  searchBooks(query: string): Observable<GoogleBooksResponse> {
    return this.http.get<GoogleBooksResponse>(`${this.apiUrl}?q=${query}&key=${this.apiKey}`);
  }
}
