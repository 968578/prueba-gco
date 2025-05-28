package com.prueba_gco.prueba_gco.domain.ports.in;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;

import java.util.List;

public interface MovimientoUseCase {
    Movimiento crearMovimiento(Movimiento movimiento);
    List<Movimiento> consultarMovimientosProducto(long idProduto);

}
