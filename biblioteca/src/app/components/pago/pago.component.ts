import { Component, OnInit } from '@angular/core';
import { PaypalService } from '../paypal.service';

declare var paypal: any; // Declarar la variable PayPal global

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  constructor(private paypalService: PaypalService) {}

  ngOnInit(): void {
    this.loadPaypalButton();
  }

  loadPaypalButton(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return this.paypalService.createOrder('10.00', 'Libro de muestra') // Define precio y descripción
          .toPromise()
          .then((order: any) => order.id);
      },
      onApprove: (data: any, actions: any) => {
        return this.paypalService.captureOrder(data.orderID)
          .toPromise()
          .then((details: any) => {
            alert('Pago exitoso!');
            // Puedes agregar más lógica aquí, como redirigir al usuario o actualizar el estado de la compra
          });
      },
      onError: (err: any) => {
        console.error('Error en el pago de PayPal', err);
        alert('Hubo un problema con el pago, por favor intenta nuevamente.');
      }
    }).render('#paypal-button-container'); // Asegúrate de tener un contenedor en el HTML
  }
}
