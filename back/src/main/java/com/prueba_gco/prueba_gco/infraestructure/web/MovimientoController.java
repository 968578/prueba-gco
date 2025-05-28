package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.ports.in.MovimientoUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/{idProducto}")
    public ResponseEntity<List<Movimiento>> consultarMovimientosProducto(@PathVariable Long idProducto){
        List<Movimiento> movimientos =  movimientoUseCase.consultarMovimientosProducto(idProducto);
        return ResponseEntity.ok(movimientos);
    }
}
