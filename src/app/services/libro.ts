import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private libro = {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    anio: 1967,
    genero: 'Realismo mágico'
  };

  constructor() { }

  getLibro() {
    return this.libro;
  }
}
