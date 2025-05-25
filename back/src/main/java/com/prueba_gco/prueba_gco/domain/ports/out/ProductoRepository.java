package com.prueba_gco.prueba_gco.domain.ports.out;

import com.prueba_gco.prueba_gco.domain.model.Producto;

public interface ProductoRepository {
    Producto guardar(Producto producto);
}
