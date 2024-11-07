import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  private clientId = 'blq79ipju7jz3c8ffhfhlaa98uuek3'; // Tu Client ID
  private clientSecret = 'odq8yduh2ts9bpku2hi1drfcr5a0q5'; // Tu Client Secret
  private baseUrl = 'https://api.twitch.tv/helix';

  constructor(private http: HttpClient) {}

  // Método para obtener el token de acceso
  getAccessToken(): Observable<any> {
    const url = 'https://id.twitch.tv/oauth2/token';

    // Configura los parámetros usando HttpParams
    const body = new HttpParams()
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret)
      .set('grant_type', 'client_credentials');

    // Realiza la solicitud con los encabezados correctos
    return this.http.post(url, body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }

  // Método para obtener el ID de la categoría en base a su nombre
  getCategoryId(accessToken: string, categoryName: string): Observable<any> {
    const headers = new HttpHeaders({
      'Client-ID': this.clientId,
      Authorization: `Bearer ${accessToken}`
    });
    return this.http.get(`${this.baseUrl}/games?name=${categoryName}`, { headers });
  }

  // Método para obtener transmisiones por ID de categoría
  getStreams(accessToken: string, categoryId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Client-ID': this.clientId,
      Authorization: `Bearer ${accessToken}`
    });
    return this.http.get(`${this.baseUrl}/streams?game_id=${categoryId}`, { headers });
  }
}
