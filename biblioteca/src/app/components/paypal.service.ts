import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
  private apiUrl = 'http://localhost:3000'; // Cambia esto por la URL de tu backend

  constructor(private http: HttpClient) {}

  createOrder(price: string, description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-order`, { price, description });
  }

  captureOrder(orderID: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/capture-order`, { orderID });
  }
}
