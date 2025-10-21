import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../services/pedido';

@Component({
  selector: 'app-arreglo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arreglo.html',
  styleUrl: './arreglo.css'
})
export class ArregloComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidos = this.pedidoService.getPedidos();
  }
}
