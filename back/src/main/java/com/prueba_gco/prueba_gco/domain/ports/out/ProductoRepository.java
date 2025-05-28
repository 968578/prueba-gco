package com.prueba_gco.prueba_gco.domain.ports.out;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.model.filtro.ProductoFiltro;

import java.util.List;
import java.util.Optional;

public interface ProductoRepository {
    Producto guardar(Producto producto);
    // List<Producto> listar();
    List<Producto> listarFiltro(ProductoFiltro productoFiltro);
    Optional<Producto> buscarPorId(Long id);
    Producto actualizar(Producto producto);
    void eliminar(Long id);
}
