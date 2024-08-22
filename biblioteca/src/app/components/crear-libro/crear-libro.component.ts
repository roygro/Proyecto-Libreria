import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service'; // Ajusta la ruta según tu estructura
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {
  crearLibroForm: FormGroup;
  idLibrary: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookService: BookService, // Asegúrate de que este servicio está configurado correctamente
    private libraryService: LibraryService // Asegúrate de que este servicio está configurado correctamente
  ) {
    this.crearLibroForm = this.fb.group({
      nomBook: ['', Validators.required],
      descripcion: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required],
      precioLibro: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    // No necesitamos obtener idLibrary desde la ruta, sino obtenerlo basado en el correo ingresado
  }

  onSubmit(): void {
    if (this.crearLibroForm.valid) {
      const libroData = this.crearLibroForm.value;
  
      this.bookService.addBook(libroData).subscribe({
        next: (response: any) => {
          console.log('Libro creado exitosamente', response);
          this.router.navigate(['/libros']); // Redirigir a la lista de libros o a donde prefieras
        },
        error: (error: any) => {
          console.error('Error al crear el libro', error);
        }
      });
    } else {
      console.log('Formulario no válido:', this.crearLibroForm);
      this.crearLibroForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    }
  }
  
  
}
