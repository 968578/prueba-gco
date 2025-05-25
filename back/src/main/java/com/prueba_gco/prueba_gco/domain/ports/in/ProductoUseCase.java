package com.prueba_gco.prueba_gco.domain.ports.in;

import com.prueba_gco.prueba_gco.domain.model.Producto;

import java.util.List;

public interface ProductoUseCase {
    Producto crearProducto(Producto producto);
    List<Producto> listarProductos();
}
