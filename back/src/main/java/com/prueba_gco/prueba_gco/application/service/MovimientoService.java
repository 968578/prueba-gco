package com.prueba_gco.prueba_gco.application.service;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.ports.in.MovimientoUseCase;
import com.prueba_gco.prueba_gco.domain.ports.in.ProductoUseCase;
import com.prueba_gco.prueba_gco.domain.ports.out.MovimientoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class MovimientoService implements MovimientoUseCase {

    private final MovimientoRepository movimientoRepo;
    private final ProductoUseCase productoUseCase;

    public  MovimientoService(
            MovimientoRepository movimientoRepo,
            ProductoUseCase productoUseCase
    ){
        this.movimientoRepo = movimientoRepo;
        this.productoUseCase = productoUseCase;
    }

    @Override
    public Movimiento crearMovimiento(Movimiento movimiento) {
        productoUseCase.actualizarStock(movimiento);
        if(movimiento.getFechaCreacion() == null){
            movimiento.setFechaCreacion(LocalDateTime.now().toString());
        }
        return movimientoRepo.crear(movimiento);
    }

    @Override
    public List<Movimiento> consultarMovimientosProducto(long idProduto) {
        return movimientoRepo.consultarPorProducto(idProduto);
    }
}
