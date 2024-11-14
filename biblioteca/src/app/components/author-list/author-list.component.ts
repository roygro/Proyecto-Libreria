import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  query: string = '';
  authors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    // Puedes agregar alguna lógica inicial si es necesario
  }

  // Método para buscar autores por nombre
  searchAuthors(): void {
    this.authorService.searchAuthors(this.query).subscribe((data: any) => {
      this.authors = data.docs.map((author: Author) => ({
        ...author,
        bio: author.bio || 'No disponible',
        birth_date: author.birth_date || 'Desconocido',
        first_publish_year: author.first_publish_year || 'Desconocido'
      }));

      // Intentamos obtener detalles adicionales de cada autor
      this.authors.forEach((author, index) => {
        if ((author as any).key) {
          this.authorService.getAuthorDetails((author as any).key).subscribe(details => {
            this.authors[index] = {
              ...author,
              bio: details.bio || author.bio,
              birth_date: details.birth_date || author.birth_date,
              first_publish_year: details.first_publish_year || author.first_publish_year
            };
          });
        }
      });
    });
  }

  // Método para obtener la imagen de portada del autor
  getCoverImage(coverId: number): string {
    return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
  }
}
