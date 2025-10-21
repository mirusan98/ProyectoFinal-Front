import { Component, NgModule, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, CommonModule],
})

export class App {
  protected readonly title = signal('ProyectoFinal');

}
