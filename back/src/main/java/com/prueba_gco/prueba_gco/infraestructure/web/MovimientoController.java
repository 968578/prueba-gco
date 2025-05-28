package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.ports.in.MovimientoUseCase;
import com.prueba_gco.prueba_gco.infraestructure.web.response.ApiResponseHttp;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Movimientos", description = "Crear y listar movimientos de productos")
@RestController
@RequestMapping("/movimientos")
public class MovimientoController {
    private final MovimientoUseCase movimientoUseCase;

    public MovimientoController(MovimientoUseCase movimientoUseCase){
        this.movimientoUseCase = movimientoUseCase;
    }

    @Operation(summary = "Crear un nuevo movimiento")
    @ApiResponse(
            responseCode = "200",
            description = "Movimiento creado correctamente",
            content = @Content(schema = @Schema(implementation = ApiResponseHttp.class))
    )
    @PostMapping()
    public ResponseEntity<?> crearMovimiento(@Valid  @RequestBody Movimiento movimiento, BindingResult resultValidation){

        if(resultValidation.hasErrors()){
            return ResponseEntity.badRequest().body(ApiResponseHttp.error(resultValidation));
        }
        Movimiento movimientoCreado = movimientoUseCase.crearMovimiento(movimiento);
        return ResponseEntity.ok(new ApiResponseHttp("ok", movimientoCreado));
    }

    @Operation(summary = "Obtener los movimientos de un producto")
    @ApiResponse(
            responseCode = "200",
            description = "Movimientos listado",
            content = @Content(schema = @Schema(implementation = ApiResponseHttp.class))
    )
    @GetMapping("/{idProducto}")
    public ResponseEntity<?> consultarMovimientosProducto(@PathVariable Long idProducto){
        List<Movimiento> movimientos =  movimientoUseCase.consultarMovimientosProducto(idProducto);
        return ResponseEntity.ok(new ApiResponseHttp("ok",movimientos));
    }
}
