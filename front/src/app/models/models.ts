export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  estado: number;
  precio: number;
  stock: number;
  codigo: string;
  fechaCreacion: string;
  categoriaId: number;
}

export interface Movimiento {
  id: number;
  productoId: number;
  tipo: number;
  cantidad: number;
  fecha: string;
  descripcion: string;
}