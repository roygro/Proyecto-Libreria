import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../twitch.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {
  streams: any = []; // Almacenamos las transmisiones
  categories: string[] = ['audiobooks', 'books', 'literature','music','andrew061289', 'guitar hero']; // Categorías disponibles
  selectedCategory: string = 'audiobooks'; // Categoría por defecto
  loading: boolean = false; // Para mostrar el estado de carga

  constructor(private twitchService: TwitchService) {}

  ngOnInit(): void {
    this.loadStreams(); // Cargar las transmisiones al iniciar
  }

  // Función para cargar las transmisiones por categoría
  loadStreams(): void {
    this.loading = true;
    this.twitchService.getAccessToken().subscribe((tokenResponse: any) => {
      const accessToken = tokenResponse.access_token;
      
      // Obtener el ID de la categoría en base al nombre seleccionado
      this.twitchService.getCategoryId(accessToken, this.selectedCategory).subscribe((categoryData: any) => {
        const categoryId = categoryData.data[0]?.id; // Obtener el ID de la categoría

        if (categoryId) {
          // Obtener transmisiones por el ID de la categoría
          this.twitchService.getStreams(accessToken, categoryId).subscribe((data: any) => {
            this.streams = data.data;
            this.loading = false;
          });
        } else {
          this.streams = []; // No hay resultados para la categoría
          this.loading = false;
        }
      });
    });
  }

  // Función para manejar el cambio de categoría
  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
    this.loadStreams(); // Recargar los streams al cambiar la categoría
  }
}
