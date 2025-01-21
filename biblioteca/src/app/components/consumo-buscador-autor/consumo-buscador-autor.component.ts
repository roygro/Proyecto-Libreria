import { Component, OnInit } from '@angular/core';
import { OpenLibraryService } from '../../openlibrary.service';


@Component({
  selector: 'app-author-search',
  templateUrl: './consumo-buscador-autor.component.html',
  styleUrls: ['./consumo-buscador-autor.component.css']
})
export class ConsumoBuscadorAutorComponent implements OnInit {
searchAuthors // Lista de obras del autor
(arg0: string) {
throw new Error('Method not implemented.');
}
  
  authorDetails: any; // Información del autor (aquí almacenas los detalles)
  authorWorks: any[] = []; // Lista de obras del autor

  constructor(private openLibraryService: OpenLibraryService) {}

  ngOnInit(): void {
    // Aquí podrías inicializar datos si es necesario
  }

  // Método para obtener las obras del autor
  getAuthorWorks(authorKey: string): void {
    this.openLibraryService.getAuthorWorks(authorKey).subscribe(
      (works: any) => {
        this.authorWorks = works; // Asignar los resultados a authorWorks
      },
      (error) => {
        console.error('Error al obtener las obras del autor:', error);
      }
    );
  }
}
