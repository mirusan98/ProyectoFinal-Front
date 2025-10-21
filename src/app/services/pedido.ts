import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedidos = [
    { id: 1, producto: 'Regla', cantidad: 2, precio: 500 },
    { id: 2, producto: 'Cuaderno', cantidad: 3, precio: 1500 },
    { id: 3, producto: 'Mochila', cantidad: 1, precio: 15000 },
    { id: 4, producto: 'Lápiz', cantidad: 5, precio: 300 }
  ];

  constructor() { }

  getPedidos() {
    return this.pedidos;
  }
}
