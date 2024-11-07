import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-audiolibros',
  templateUrl: './audiolibros.component.html',
  styleUrls: ['./audiolibros.component.css']
})
export class AudiolibrosComponent implements OnInit {
  audiolibros: any[] = []; // Almacena los audiolibros
  query: string = ''; // Almacena la consulta de búsqueda

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAudiobooks(); // Cargar audiolibros al inicio
  }

  getAudiobooks(): void {
    const url = 'http://localhost:3000/spotify/audiobooks';
    
    this.http.get<any>(url).subscribe(
      (response) => {
        console.log('Respuesta de audiolibros:', response); // Log para verificar la respuesta
        this.audiolibros = response.categories.items; // Ajusta esto según la estructura real de la respuesta
      },
      (error) => {
        console.error('Error al obtener los audiolibros:', error);
      }
    );
  }

  search(): void {
    const url = `http://localhost:3000/spotify/audiobooks?query=${this.query}`;
    
    this.http.get<any>(url).subscribe(
      (response) => {
        console.log('Resultados de búsqueda:', response);
        this.audiolibros = response.categories.items; // Ajusta esto según la estructura real de la respuesta
      },
      (error) => {
        console.error('Error al buscar audiolibros:', error);
      }
    );
  }
}
