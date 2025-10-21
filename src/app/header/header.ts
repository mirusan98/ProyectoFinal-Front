import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
})
export class HeaderComponent {
mensaje = 'Bienvenido al Proyecto Final de Angular';
}
