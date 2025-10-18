import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arreglo',
  imports: [CommonModule],
  templateUrl: './arreglo.html',
  styleUrl: './arreglo.css',

})
export class ArregloComponent {
Pedido = [
  { id: 1, producto: 'Regla', cantidad: 2, precio: 500 },
  { id: 2, producto: 'Cuaderno', cantidad: 3, precio: 1500 },
  { id: 3, producto: 'Mochila', cantidad: 1, precio: 15000 },
  { id: 4, producto: 'Lápiz', cantidad: 5, precio: 300 }
];
}
