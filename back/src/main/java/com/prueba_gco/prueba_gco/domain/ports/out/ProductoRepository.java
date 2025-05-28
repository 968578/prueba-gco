package com.prueba_gco.prueba_gco.domain.ports.out;

import com.prueba_gco.prueba_gco.domain.model.Producto;

import java.util.List;
import java.util.Optional;

public interface ProductoRepository {
    Producto guardar(Producto producto);
    List<Producto> listar();
    Optional<Producto> buscarPorId(Long id);
    Producto actualizar(Producto producto);
    void eliminar(Long id);
}
