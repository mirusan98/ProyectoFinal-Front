import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeComponent } from './mensaje/mensaje';
import { ObjetoComponent } from './objeto/objeto';
import { ArregloComponent } from './arreglo/arreglo';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { CommonModule } from '@angular/common';
import { MovieList } from './movie-list/movie-list';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, MensajeComponent, ObjetoComponent, ArregloComponent, HeaderComponent, FooterComponent, CommonModule, MovieList],
})
export class App {
  protected readonly title = signal('ProyectoFinal');

}

