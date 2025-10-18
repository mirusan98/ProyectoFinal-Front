import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeComponent } from './mensaje/mensaje';
import { ObjetoComponent } from './objeto/objeto';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, MensajeComponent, ObjetoComponent],
})
export class App {
  protected readonly title = signal('ProyectoFinal');
}

