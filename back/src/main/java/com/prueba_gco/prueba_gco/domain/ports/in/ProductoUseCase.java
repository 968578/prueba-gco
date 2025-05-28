package com.prueba_gco.prueba_gco.domain.ports.in;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.model.filtro.ProductoFiltro;

import java.util.List;
import java.util.Optional;

public interface ProductoUseCase {
    Producto crearProducto(Producto producto);
    // List<Producto> listarProductos();
    List<Producto> listarProductosFiltro(ProductoFiltro productoFiltro);
    Optional<Producto> buscarProductoPorId(Long id);
    Producto actualizarProducto(Producto producto);
    void eliminarProducto(Long id);
    Producto actualizarStock(Movimiento movimiento);

}
