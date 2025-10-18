import { Component } from '@angular/core';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.html',
  styleUrls: ['./objeto.css']
})
export class ObjetoComponent {
  libro = {
    titulo: '100 años de soledad',
    autor: 'Gabriel García Márquez',
    anio: 1967,
    genero: 'Realismo mágico'
  };
}
