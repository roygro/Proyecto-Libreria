// edicion-libros.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-edicion-libros',
  templateUrl: './edicion-libros.component.html'
})
export class EdicionLibrosComponent implements OnInit {
  editForm: FormGroup;
  libraryEmail: string = '';
  libraries: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService,
    private libraryService: LibraryService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      nomBook: ['', Validators.required],
      descripcion: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required],
      precioLibro: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      libraryEmail: ['', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const idNumber = Number(id); // Convierte el id a número
      this.bookService.getBookById(idNumber).subscribe(book => {
        this.editForm.patchValue(book);
        this.libraryEmail = book.email; // Asumiendo que la biblioteca tiene un campo email
      });
    }
  }
  

  onLibraryEmailBlur() {
    const email = this.editForm.get('libraryEmail')?.value;
    this.libraryService.getLibraryByEmail(email).subscribe(library => {
      if (library) {
        this.editForm.patchValue({ idLibrary: library.idLibrary });
      } else {
        console.error('Biblioteca no encontrada');
      }
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const idNumber = Number(id); // Convierte el id a número
        this.bookService.updateBook(idNumber, this.editForm.value).subscribe(() => {
          this.router.navigate(['/books']);
        });
      }
    }
  }
  
}

