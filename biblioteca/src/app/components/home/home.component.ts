import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books = [
    {
      id: 1,
      title: 'Si si es contigo',
      image: '/assets/calleypoche.jpg',
      availability: 'Proximamente',
      details: {
        isbn: '1234567890',
        author: 'Calle y Poche',
        language: 'Español',
        price: 'MXN 100.00',
        pages: 200,
        year: 2021,
        edition: 1,
        publisher: 'Penguin Random House',
        suggestedAge: 'ADU',
        format: 'Rústica'
      }
    },
    {
      id: 2,
      title: 'La llamada de Cthulhu y otros relatos',
      image: '/assets/lovecraft.jpg',
      availability: 'Disponible',
      details: {
        isbn: '0987654321',
        author: 'H.P. Lovecraft',
        language: 'Español',
        price: 'MXN 150.00',
        pages: 300,
        year: 2020,
        edition: 1,
        publisher: 'Editores Mexicanos Unidos',
        suggestedAge: 'ADU',
        format: 'Rústica'
      }
    },
    {
      id: 3,
      title: 'Ya te dije adios, ahora como te olvido',
      image: '/assets/walter.jpg',
      availability: 'Disponible',
      details: {
        isbn: '1122334455',
        author: 'Walter Riso',
        language: 'Español',
        price: 'MXN 120.00',
        pages: 250,
        year: 2019,
        edition: 1,
        publisher: 'Editorial Planeta Mexicana, S.A. de C.V.',
        suggestedAge: 'ADU',
        format: 'Rústica'
      }
    },
    {
      id: 4,
      title: 'Boulevard',
      image: 'https://m.media-amazon.com/images/I/81ZPr8asmsL.AC_UF1000,1000_QL80.jpg',
      availability: 'Proximamente',
      details: {
        isbn: '9786075509594',
        author: 'Flor M. Salvador',
        language: 'Español',
        price: 'MXN 329.00',
        pages: 488,
        year: 2022,
        edition: 1,
        publisher: 'Contraluz',
        suggestedAge: 'ADU',
        format: 'Rústica'
      }
    },
    {
      id: 5,
      title: 'Heartstopper',
      image: '/assets/heart.jfif',
      availability: 'Disponible',
      details: {
        isbn: '6677889900',
        author: 'Alice Oseman',
        language: 'Español',
        price: 'MXN 180.00',
        pages: 320,
        year: 2021,
        edition: 1,
        publisher: 'V&R Editoras',
        suggestedAge: 'ADU',
        format: 'Rústica'
      }
    },
    {
      id: 6,
      title: 'La canción de Aquiles',
      image: '/assets/aquiles.jpg',
      availability: 'Disponible',
      details: {
        isbn: '9988776655',
        author: 'Madeline Miller',
        language: 'Español',
        price: 'MXN 200.00',
        pages: 360,
        year: 2018,
        edition: 1,
        publisher: 'Alianza de Novela',
        suggestedAge: 'ADU',
        format: 'Rústica'
      }
    }
  ];
}


