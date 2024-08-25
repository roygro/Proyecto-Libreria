// administrador-biblioteca.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibraryService } from '../library.service';
import { BookService } from '../book.service';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-administrador-biblioteca',
  templateUrl: './administrador-biblioteca.component.html',
  styleUrls: ['./administrador-biblioteca.component.css']
})
export class AdministradorBibliotecaComponent implements OnInit {
  editLibraryForm: FormGroup;
  addBookForm: FormGroup;
  editBookForm: FormGroup; // Formulario para editar libros
  idLibrary!: number;
  books: any[] = [];
  selectedBook: any; // Libro seleccionado para editar

  constructor(
    private fb: FormBuilder,
    private libraryService: LibraryService,
    private bookService: BookService,
    private authService:  AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editLibraryForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      colonia: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      tarjeta: ['', Validators.required]
    });

    this.addBookForm = this.fb.group({
      nomBook: ['', Validators.required],
      descripcion: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required],
      precioLibro: ['', Validators.required],
      image: ['', Validators.required]
    });

    this.editBookForm = this.fb.group({
      nomBook: ['', Validators.required],
      descripcion: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required],
      precioLibro: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('idLibrary');
      console.log('ID recibido:', id);
      this.idLibrary = id ? +id : NaN;
      console.log('ID convertido:', this.idLibrary);
      if (!isNaN(this.idLibrary)) {
        this.loadLibraryData();
        this.loadBooks();
      } else {
        console.error('ID de la biblioteca no válido:', this.idLibrary);
      }
    });
  }
  
  
  

  loadLibraryData(): void {
    this.libraryService.getLibraryById(this.idLibrary).subscribe(
      data => {
        this.editLibraryForm.patchValue(data);
      },
      error => {
        console.error('Error al cargar los datos de la biblioteca:', error);
      }
    );
  }  

  loadBooks(): void {
    console.log('Cargando libros para la biblioteca con ID:', this.idLibrary);
    this.bookService.getBooksByLibraryId(this.idLibrary).subscribe(
      data => {
        this.books = data;
      },
      error => {
        console.error('Error al cargar los libros:', error);
      }
    );
  }
  
  

  onSubmit(): void {
    if (this.editLibraryForm.valid) {
      this.libraryService.updateLibrary(this.idLibrary, this.editLibraryForm.value).subscribe(
        () => {
          console.log('Biblioteca actualizada exitosamente');
        },
        error => {
          console.error('Error al actualizar la biblioteca:', error);
        }
      );
    }
  }
  

  onAddBook(): void {
    if (this.addBookForm.valid) {
      const newBook = { ...this.addBookForm.value, idLibrary: this.idLibrary };
      this.bookService.addBook(newBook).subscribe(
        book => {
          this.books.push(book);
          this.addBookForm.reset();
        },
        error => {
          console.error('Error al agregar el libro:', error);
        }
      );
    }
  }
  

  onDeleteBook(idBook: number): void {
    this.bookService.deleteBook(idBook).subscribe(
      () => {
        this.books = this.books.filter(book => book.idBook !== idBook);
      },
      error => {
        console.error('Error al eliminar el libro:', error);
      }
    );
  }
  

  onEditBook(book: any): void {
    this.selectedBook = book;
    this.editBookForm.patchValue(book); // Rellenar el formulario con los datos del libro seleccionado
  }

  onUpdateBook(): void {
    if (this.editBookForm.valid) {
      const updatedBook = { ...this.editBookForm.value, idBook: this.selectedBook.idBook };
      this.bookService.updateBook(this.selectedBook.idBook, updatedBook).subscribe(
        book => {
          // Actualizar el libro en la lista
          this.books = this.books.map(b => (b.idBook === book.idBook ? book : b));
          this.selectedBook = null; // Limpiar la selección
          this.editBookForm.reset(); // Limpiar el formulario
        },
        error => {
          console.error('Error al actualizar el libro:', error);
        }
      );
    }
  }

  cancelEdit(): void {
    this.selectedBook = null; // Limpiar el libro seleccionado y ocultar el formulario
    this.editBookForm.reset();
  }
}
