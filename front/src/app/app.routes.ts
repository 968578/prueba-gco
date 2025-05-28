import {  Routes } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { FormularioProductosComponent } from './pages/formulario-productos/formulario-productos.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';

export const routes: Routes = [
  {path: "",component: ListaProductosComponent},
  {path: "agregar",component: FormularioProductosComponent},
  {path: "producto/:id",component: DetallesProductoComponent},
];

