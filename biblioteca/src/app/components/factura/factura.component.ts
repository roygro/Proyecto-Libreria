import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  payerName: string = '';
  amount: string = '';
  transactionId: string = '';
  bookTitle: string = '';
  bookPrice: string = '';
  bookISBN: string = '';
  purchaseDate: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Obtener parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.payerName = params['payerName'];
      this.amount = params['amount'];
      this.transactionId = params['transactionId'];
      this.bookTitle = params['title'];
      this.bookPrice = params['price']?.replace('MXN ', '').trim();
      this.bookISBN = params['isbn'];
    });

    // Generar la fecha y hora actual
    const now = new Date();
    this.purchaseDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  }

  // Método para redirigir a la página de inicio
  volver(): void {
    this.router.navigate(['/home']);
  }

  // Método para generar el PDF a partir del HTML
  generateInvoiceFromHTML(): void {
    const element = document.getElementById('invoice-content'); // Solo el contenido de la factura
    if (!element) {
      alert('No se encontró el contenido de la factura.');
      return;
    }
  
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // Captura de la imagen del HTML
      const pdf = new jsPDF('p', 'mm', 'a4'); // Crear el PDF en tamaño A4
  
      // Añadir la imagen al PDF
      const imgWidth = 190; // Ajustar al ancho de la página
      const pageHeight = 297; // Altura de una página A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
  
      let position = 0;
  
      pdf.addImage(imgData, 'PNG', 10, position + 10, imgWidth, imgHeight); // Posición inicial
      heightLeft -= pageHeight;
  
      // Añadir páginas si el contenido excede una página
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position + 10, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      // Descargar el PDF
      pdf.save('factura.pdf');
    });
  }
}