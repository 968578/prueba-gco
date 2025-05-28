package com.prueba_gco.prueba_gco.domain.ports.in;

import com.prueba_gco.prueba_gco.domain.model.Producto;

import java.util.List;
import java.util.Optional;

public interface ProductoUseCase {
    Producto crearProducto(Producto producto);
    List<Producto> listarProductos();
    Optional<Producto> buscarProductoPorId(Long id);
    Producto actualizarProducto(Producto producto);
}
