// src/app/mercadolibre.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {
  private baseUrl = 'https://api.mercadolibre.com';

  constructor(private http: HttpClient) { }

  searchProducts(query: string): Observable<any> {
    const url = `${this.baseUrl}/sites/MLA/search?q=${query}`;
    return this.http.get(url);
  }
}
