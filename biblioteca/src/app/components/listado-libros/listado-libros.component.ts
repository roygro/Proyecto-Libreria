import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'; // Ajusta la ruta según la ubicación de tu servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {
  libros: any[] = []; // Asegúrate de definir la estructura correcta según tu modelo

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAllBooks().subscribe(
      (data: any[]) => {
        this.libros = data;
      },
      (error) => {
        console.error('Error al obtener los libros:', error);
      }
    );
  }

  editBook(id: number): void {
    this.router.navigate([`/editarLibro/${id}`]);
  }

  deleteBook(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
      this.bookService.deleteBook(id).subscribe(
        () => {
          this.loadBooks();
        },
        (error) => {
          console.error('Error al eliminar el libro:', error);
        }
      );
    }
  }
}

