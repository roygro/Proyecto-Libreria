import { Component, Inject } from '@angular/core';
import { BookDataService } from '../BookDataService';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  query: string = '';
  books: any[] = [];
  selectedBook: any = null;
  errorMessage: string = '';

  constructor(@Inject(BookDataService) private bookDataService: BookDataService) {}

  searchBooks() {
    this.errorMessage = '';
    this.selectedBook = null;

    this.bookDataService.searchBooks(this.query).subscribe(
      (response: any) => {
        if (response.docs && response.docs.length > 0) {
          this.books = response.docs;
        } else {
          this.books = [];
          this.errorMessage = 'No se encontraron resultados';
        }
      },
      (error: any) => {
        this.errorMessage = 'Error en la búsqueda. Intente nuevamente.';
      }
    );
  }

  selectBook(book: any) {
    const bookKey = book.key;
    this.bookDataService.getBookDetails(bookKey).subscribe(
      (details: any) => {
        this.selectedBook = { ...book, ...details };
      },
      (error: any) => {
        this.errorMessage = 'No se pudo obtener la información del libro';
      }
    );
  }
}
