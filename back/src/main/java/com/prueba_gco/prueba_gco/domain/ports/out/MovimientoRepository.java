package com.prueba_gco.prueba_gco.domain.ports.out;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;

import java.util.List;

public interface MovimientoRepository  {
    Movimiento crear(Movimiento movimiento);
    List<Movimiento> consultarPorProducto(Long idProducto);
}
