import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'http://localhost:3000/spotify'; // URL de tu API

  constructor(private http: HttpClient) {}

  searchAlbums(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/albums`, { params: { query } });
  }

  searchAudiobooks(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/audiobooks`, { params: { query } }); // Cambiado el endpoint a /audiobooks
  }
}

