import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit, AfterViewInit {
  bookTitle: string | undefined;
  bookPrice: string | undefined;
  bookISBN: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Obtener parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.bookTitle = params['title'];
      this.bookPrice = params['price']?.replace('MXN ', '').trim(); // Elimina 'MXN' si está presente
      this.bookISBN = params['isbn'];
    });
  }

  ngAfterViewInit(): void {
    if (typeof paypal !== 'undefined') {
      // Crear el botón de PayPal
      paypal.Buttons({
        createOrder: (data: any, actions: {
            order: {
              create: (arg0: {
                purchase_units: {
                  amount: {
                    currency_code: string; // Divisa: MXN
                    value: string; // Asegúrate de tener dos decimales
                  };
                  description: string; // Descripción del libro
                }[]; 
              }) => any;
            };
          }) => {
          if (!this.bookPrice || !this.bookTitle) {
            console.error('Faltan datos del libro.');
            return;
          }

          const priceInMXN = parseFloat(this.bookPrice); // El precio en MXN

          if (isNaN(priceInMXN)) {
            console.error('El precio no es válido.');
            return;
          }

          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'MXN', // Divisa: MXN
                value: priceInMXN.toFixed(2) // Asegúrate de tener dos decimales
              },
              description: `${this.bookTitle} (ISBN: ${this.bookISBN})` // Descripción del libro
            }]
          });
        },
        onApprove: (data: any, actions: { order: { capture: () => Promise<any>; }; }) => {
          return actions.order.capture().then(details => {
            console.log('Pago completado', details);
            alert(`Pago exitoso para el libro "${this.bookTitle}"`);

            // Extraer la información del pago
            const payerName = details.payer.name.given_name;  // Obtener el nombre del pagador
            const amount = details.purchase_units[0].amount.value;  // Obtener el monto
            const transactionId = details.id;  // Obtener el ID de la transacción

            // Redirigir a la página de la factura con los datos como parámetros
            this.router.navigate(['/factura'], {
              queryParams: {
                payerName,
                amount,
                transactionId,
                title: this.bookTitle,
                price: this.bookPrice,
                isbn: this.bookISBN
              }});
          });
        },
        onError: (err: any) => {
          console.error('Error en el pago', err);
          alert('Hubo un error con el pago. Inténtalo nuevamente.');
        }
      }).render('#paypal-button-container');
    } else {
      console.error('PayPal SDK no está disponible.');
    }
  }
}
