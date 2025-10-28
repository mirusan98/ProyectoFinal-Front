import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet,  HeaderComponent, FooterComponent, CommonModule],
})

export class App {
  protected readonly title = signal('ProyectoFinal');

}
