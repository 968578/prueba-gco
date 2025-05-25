import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormularioProductosComponent } from "./pages/formulario-productos/formulario-productos.component";
import { ListaProductosComponent } from "./pages/lista-productos/lista-productos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormularioProductosComponent, ListaProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
