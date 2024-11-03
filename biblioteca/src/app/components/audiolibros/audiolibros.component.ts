import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-audiolibros',
  templateUrl: './audiolibros.component.html',
})
export class AudiolibrosComponent implements OnInit {
  audiolibros: any[] = [];
  query: string = 'audiobook'; // Puedes usar un término predeterminado o dejarlo vacío

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.search(); // Llama al método de búsqueda al iniciar el componente
  }

  search() {
    this.spotifyService.searchAudiobooks(this.query).subscribe(
      (data) => {
        console.log('Datos recibidos:', data); // Verifica la estructura de los datos
        this.audiolibros = data.items; // Ajusta según la estructura de la respuesta
      },
      (error) => {
        console.error('Error al buscar audiolibros:', error);
      }
    );
  }
}
