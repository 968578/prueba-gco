import {  Routes } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { FormularioProductosComponent } from './pages/formulario-productos/formulario-productos.component';

export const routes: Routes = [
  {path: "",component: ListaProductosComponent},
  {path: "agregar",component: FormularioProductosComponent},
];

