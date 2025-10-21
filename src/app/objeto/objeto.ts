import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.html',
  styleUrls: ['./objeto.css']
})
export class ObjetoComponent implements OnInit {

  libro: any;

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.libro = this.libroService.getLibro();
  }
}

