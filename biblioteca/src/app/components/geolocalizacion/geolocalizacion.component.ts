import { Component, OnInit } from '@angular/core';

// Definir interfaces para el resultado y los elementos de la biblioteca
interface Item {
  position: { lat: number; lng: number };
  title: string;
  address: { label: string };
}

interface Result {
  items: Item[];
}

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit {
  map: any;
  ui: any; // Declarar la UI como una variable de clase

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const platform = new H.service.Platform({
      apikey: 'l3aXmsO_9Z8xtckgQsOwVvsbQ893gAdafV7KQ2knvA4'
    });

    const defaultLayers = platform.createDefaultLayers();
    this.map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
      zoom: 13,
      center: { lat: 21.156111, lng: -100.9325 } // Coordenadas predeterminadas
    });

    new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers); // Crear la UI solo una vez

    this.getUserLocation();
  }

  private getUserLocation(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log('Coordenadas del usuario:', userCoords); // Verifica las coordenadas
        this.map.setCenter(userCoords);

        // Agregar marcador para la ubicación del usuario
        const userMarker = new H.map.Marker(userCoords, {
          icon: new H.map.Icon('http://maps.google.com/mapfiles/ms/icons/red-dot.png') // Marcador rojo
        });
        this.map.addObject(userMarker); // Agrega el marcador del usuario

        this.searchNearbyLibraries(userCoords);
      },
      (error) => {
        console.error('Error al obtener la ubicación del usuario:', error);
      }
    );
  }
  
  private searchNearbyLibraries(userCoords: { lat: number; lng: number }): void {
    const platform = new H.service.Platform({
      apikey: 'l3aXmsO_9Z8xtckgQsOwVvsbQ893gAdafV7KQ2knvA4'
    });
    const service = platform.getSearchService();
  
    service.discover({
      at: `${userCoords.lat},${userCoords.lng}`,
      q: 'Esperanza Zambrano', // Cambia esto si es necesario
      limit: 80
    }, (result: Result) => {
      console.log('Resultados de la búsqueda:', result.items); // Verifica los resultados

      result.items.forEach((item: Item) => {
        console.log('Item encontrado:', item); // Asegúrate de que se está iterando sobre todos los resultados
      
        const marker = new H.map.Marker(item.position);
        this.map.addObject(marker); // Agrega un marcador para cada biblioteca encontrada
      
        // Agrega un evento para mostrar información al hacer clic en el marcador
        marker.addEventListener('tap', () => {
          console.log('Marcador clicado:', item.title); // Verifica si se detecta el clic
          
          // Crear la burbuja de información
          const bubble = new H.ui.InfoBubble(item.position, {
            content: `<strong>${item.title}</strong><br>${item.address.label}`
          });
          
          // Añadir la burbuja a la UI existente
          this.ui.addBubble(bubble);
        });
        
      });
      
    }, (error: any) => {
      console.error('Error al buscar bibliotecas:', error);
    });
  }
}
