import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-administrador-biblioteca',
  templateUrl: './administrador-biblioteca.component.html',
  styleUrls: ['./administrador-biblioteca.component.css']
})
export class AdministradorBibliotecaComponent implements OnInit {
  library: any;
  books: any[] = [];

  constructor(private libraryService: LibraryService, private bookService: BookService) {}

  ngOnInit(): void {
    this.getLibraryAndBooks();
  }

  getLibraryAndBooks(): void {
    // Obtener el correo del usuario logueado para obtener la biblioteca asociada
    const userEmail = 'user@example.com'; // Este debería obtenerse del AuthService o de alguna otra forma.
    
    this.libraryService.getLibraryByEmail(userEmail).subscribe(
      data => {
        this.library = data;
        this.getBooksByLibraryId(this.library.idLibrary);
      },
      error => console.error('Error al obtener la biblioteca', error)
    );
  }

  getBooksByLibraryId(idLibrary: number): void {
    this.bookService.getAllBooks().subscribe(
      data => {
        this.books = data.filter(book => book.idLibrary === idLibrary);
      },
      error => console.error('Error al obtener los libros', error)
    );
  }

  addBook(newBook: any): void {
    newBook.idLibrary = this.library.idLibrary;
    this.bookService.addBook(newBook).subscribe(
      response => {
        this.books.push(response);
      },
      error => console.error('Error al agregar el libro', error)
    );
  }

  updateBook(updatedBook: any): void {
    this.bookService.updateBook(updatedBook.id, updatedBook).subscribe(
      response => {
        const index = this.books.findIndex(book => book.id === updatedBook.id);
        if (index !== -1) {
          this.books[index] = response;
        }
      },
      error => console.error('Error al actualizar el libro', error)
    );
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(
      () => {
        this.books = this.books.filter(book => book.id !== id);
      },
      error => console.error('Error al eliminar el libro', error)
    );
  }
}
