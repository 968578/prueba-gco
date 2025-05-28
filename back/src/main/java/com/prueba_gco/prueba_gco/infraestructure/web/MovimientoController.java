package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.ports.in.MovimientoUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movimientos")
public class MovimientoController {
    private final MovimientoUseCase movimientoUseCase;

    public MovimientoController(MovimientoUseCase movimientoUseCase){
        this.movimientoUseCase = movimientoUseCase;
    }

    @PostMapping()
    public ResponseEntity<Movimiento> crearMovimiento(@RequestBody Movimiento movimiento){
        Movimiento movimientoCreado = movimientoUseCase.crearMovimiento(movimiento);
        return ResponseEntity.ok(movimientoCreado);
    }
}
