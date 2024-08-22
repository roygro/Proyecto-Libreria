import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';  // Verifica que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-bibliotecas',
  templateUrl: './listar-bibliotecas.component.html',
  styleUrls: ['./listar-bibliotecas.component.css']
})
export class ListarBibliotecasComponent implements OnInit {
  bibliotecas: any[] = [];  // Definición de la propiedad

  constructor(private libraryService: LibraryService, private router: Router) {}

  ngOnInit(): void {
    this.loadLibraries();
  }

  loadLibraries(): void {
    this.libraryService.getAllLibraries().subscribe({
      next: (data) => {
        this.bibliotecas = data;  // Asignación de la propiedad
      },
      error: (error) => {
        console.error('Error al cargar las bibliotecas:', error);
      }
    });
  }

  editarBiblioteca(id: number): void {
    this.router.navigate(['/edicionBiblioteca', id]);
  }
  

  eliminarBiblioteca(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta biblioteca?')) {
      this.libraryService.deleteLibrary(id).subscribe({
        next: () => {
          this.bibliotecas = this.bibliotecas.filter(lib => lib.id !== id);
        },
        error: (error) => {
          console.error('Error al eliminar la biblioteca:', error);
        }
      });
    }
  }
}
