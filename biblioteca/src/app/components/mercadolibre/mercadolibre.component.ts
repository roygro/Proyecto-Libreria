// src/app/mercadolibre/mercadolibre.component.ts

import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../mercadolibre.service';

@Component({
  selector: 'app-mercadolibre',
  templateUrl: './mercadolibre.component.html',
  styleUrls: ['./mercadolibre.component.css']
})
export class MercadolibreComponent implements OnInit {
  products: any[] = [];

  constructor(private mercadolibreService: MercadolibreService) { }

  ngOnInit(): void {
    this.searchProducts('libros'); // Puedes cambiar 'libros' por la categoría que prefieras
  }

  searchProducts(query: string): void {
    this.mercadolibreService.searchProducts(query).subscribe((response: any) => {
      this.products = response.results;
    });
  }
}
