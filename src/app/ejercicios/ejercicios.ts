import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeComponent } from '../mensaje/mensaje';
import { ObjetoComponent } from '../objeto/objeto';
import { ArregloComponent } from '../arreglo/arreglo';

@Component({
  selector: 'app-ejercicios',
  imports: [ CommonModule, MensajeComponent, ObjetoComponent, ArregloComponent],
  templateUrl: './ejercicios.html',
})
export class Ejercicios {

}
