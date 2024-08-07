import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent implements OnInit {
  bookId: number | undefined;
  bookDetails: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = +params['id'];
      this.loadBookDetails(this.bookId);
    });
  }

  loadBookDetails(id: number): void {
    const books = [
      {
        id: 1,
        title: 'Si si es contigo',
        image: '/assets/calleypoche.jpg',
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
      },
      {
        id: 2,
        title: 'La llamada de Cthulhu y otros relatos',
        image: '/assets/lovecraft.jpg',
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
      },
      {
        id: 3,
        title: 'Ya te dije adios, ahora como te olvido',
        image: '/assets/walter.jpg',
        isbn: '1122334455',
        author: 'Autor 3',
        language: 'Español',
        price: 'MXN 120.00',
        pages: 250,
        year: 2019,
        edition: 1,
        publisher: 'Editorial 3',
        suggestedAge: 'ADU',
        format: 'Rústica'
      },
      {
        id: 4,
        title: 'Boulevard',
        image: 'https://m.media-amazon.com/images/I/81ZPr8asmsL.AC_UF1000,1000_QL80.jpg',
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
      },
      {
        id: 5,
        title: 'Heartstopper',
        image: '/assets/heart.jfif',
        isbn: '6677889900',
        author: 'Alice Oseman',
        language: 'Español',
        price: 'MXN 180.00',
        pages: 320,
        year: 2021,
        edition: 1,
        publisher: 'Editorial 5',
        suggestedAge: 'ADU',
        format: 'Rústica'
      },
      {
        id: 6,
        title: 'La canción de Aquiles',
        image: '/assets/aquiles.jpg',
        isbn: '9988776655',
        author: 'Madeline Miller',
        language: 'Español',
        price: 'MXN 200.00',
        pages: 360,
        year: 2018,
        edition: 1,
        publisher: 'Editorial 6',
        suggestedAge: 'ADU',
        format: 'Rústica'
      }
    ];

    const book = books.find(book => book.id === id);
    if (book) {
      this.bookDetails = book;
    }
  }
}