// edicion-biblioteca.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-edicion-biblioteca',
  templateUrl: './edicion-biblioteca.component.html',
  styleUrls: ['./edicion-biblioteca.component.css']
})
export class EdicionBibliotecaComponent implements OnInit {
  editLibraryForm: FormGroup;
  libraryId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private libraryService: LibraryService
  ) {
    this.editLibraryForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      colonia: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      tarjeta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('libraryId');
      if (id) {
        this.libraryId = +id; // Convertir a número
        this.loadLibraryData();
      } else {
        console.error('ID de biblioteca no encontrado en la ruta');
      }
    });
  }
  
  loadLibraryData(): void {
    this.libraryService.getLibraryById(this.libraryId).subscribe(
      data => {
        this.editLibraryForm = this.fb.group({
          nombre: ['', Validators.required],
          correo: ['', [Validators.required, Validators.email]],
          contrasena: ['', Validators.required],
          colonia: ['', Validators.required],
          calle: ['', Validators.required],
          numero: ['', Validators.required],
          tarjeta: ['', Validators.required]
        });
      },
      error => {
        console.error('Error al cargar los datos de la biblioteca:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.editLibraryForm.valid) {
      this.libraryService.updateLibrary(this.libraryId, this.editLibraryForm.value).subscribe(
        () => {
          this.router.navigate(['/listarBibliotecas']); // Redirigir a la lista de bibliotecas
        },
        error => {
          console.error('Error al actualizar la biblioteca:', error);
        }
      );
    } else {
      console.log('Formulario no válido', this.editLibraryForm.errors);
      // Puedes inspeccionar los errores del formulario aquí
    }
  }
  
}
