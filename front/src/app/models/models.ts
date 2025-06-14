export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  estado: number;
  precio: number;
  stock: number;
  codigo: string;
  fechaCreacion?: string;
  categoriaId: number;
}

export interface Movimiento {
  id?: number;
  productoId: number;
  tipo: number;
  cantidad: number;
  fechaCreacion?: string;
  descripcion: string;
}

export interface FiltroProducto{
  nombre: string;
  codigo: string;
  categoriaId: number;
}


export interface ResponseApi{
  name: "ok" | "error";
  data: any;
}