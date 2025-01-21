// src/app/googlebooks/googlebooks.component.ts
import { Component } from '@angular/core';
import { GoogleService } from '../../google.service';

@Component({
  selector: 'app-googlebooks',
  templateUrl: './googlebooks.component.html',
  styleUrls: ['./googlebooks.component.css']
})
export class GoogleBooksComponent {
  query: string = '';  // Término de búsqueda
  books: any[] = [];   // Almacenará los libros encontrados
  loading: boolean = false;
  error: string = '';   // Almacenará cualquier error que ocurra

  constructor(private GoogleService: GoogleService) {}

  // Método para buscar libros
  searchBooks(): void {
    if (this.query.trim() === '') {
      this.books = [];
      return;
    }

    this.loading = true;
    this.error = '';

    // Llamamos al servicio para buscar libros
    this.GoogleService.searchBooks(this.query).subscribe(
      (response) => {
        this.books = response.items;
        this.loading = false;
      },
      (error) => {
        this.error = 'Hubo un error al obtener los libros';
        this.loading = false;
      }
    );
  }
}
