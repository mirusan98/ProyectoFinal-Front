/* import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  imports: [],
  templateUrl: './mensaje.html',
  styleUrl: './mensaje.css'
})
export class Mensaje {

} */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensaje.html',
  styleUrls: ['./mensaje.css']
})
export class Mensaje {
  mensaje1: string = 'Este es el componente "Mensaje"';
  mensaje2: string = 'Este no se muestra';
  mostrar: boolean = false;
}
