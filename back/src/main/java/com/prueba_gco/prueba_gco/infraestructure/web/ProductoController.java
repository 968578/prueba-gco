package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.model.filtro.ProductoFiltro;
import com.prueba_gco.prueba_gco.domain.ports.in.ProductoUseCase;
import com.prueba_gco.prueba_gco.infraestructure.web.response.ApiResponseHttp;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Productos", description = "Crear, listar, actualizar y eliminar productos")
@RestController
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoUseCase productoUseCase;

    public ProductoController(ProductoUseCase productoUseCase){
        this.productoUseCase = productoUseCase;
    }

    @Operation(summary = "Crear un nuevo producto")
    @ApiResponse(
            responseCode = "200",
            description = "Producto creado correctamente",
            content = @Content(schema = @Schema(implementation = ApiResponseHttp.class))
    )
    @PostMapping
    public ResponseEntity<?> crearProducto(@Valid @RequestBody Producto producto, BindingResult resultValidation){
        if(resultValidation.hasErrors()){
            return ResponseEntity.badRequest().body(ApiResponseHttp.error(resultValidation));
        }
        Producto productoCreado = productoUseCase.crearProducto(producto);
        return ResponseEntity.ok(new ApiResponseHttp("ok", productoCreado));
    }

    @Operation(summary = "Buscar productos con filtro de nombre, codigo y categoria")
    @ApiResponse(
            responseCode = "200",
            description = "Productos listados correctamente",
            content = @Content(schema = @Schema(implementation = ApiResponseHttp.class))
    )
    @PostMapping("/buscar")
    public ResponseEntity<?> consultarProductos(@RequestBody ProductoFiltro productoFiltro){
        List<Producto> productos =  productoUseCase.listarProductosFiltro(productoFiltro);
        return ResponseEntity.ok(new ApiResponseHttp("ok", productos));
    }

    @Operation(summary = "Buscar un producto por id")
    @ApiResponse(
            responseCode = "200",
            description = "Producto listado correctamente",
            content = @Content(schema = @Schema(implementation = ApiResponseHttp.class))
    )
    @GetMapping("/{id}")
    public ResponseEntity<?> consultarProductosPorId(@PathVariable Long id){
        Optional<Producto> producto=  productoUseCase.buscarProductoPorId(id);
        if(producto.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponseHttp("error", null));
        }
        return ResponseEntity.ok(new ApiResponseHttp("ok",producto));
    }


    @Operation(summary = "Actualizar un producto")
    @ApiResponse(
            responseCode = "200",
            description = "Producto actualizado correctamente",
            content = @Content(schema = @Schema(implementation = ApiResponseHttp.class))
    )
    @PutMapping
    public ResponseEntity<?> actualizarProducto(@Valid @RequestBody Producto producto, BindingResult resultValidation){
        if(resultValidation.hasErrors()){
            return ResponseEntity.badRequest().body(ApiResponseHttp.error(resultValidation));
        }
        Producto productoActualizado = productoUseCase.actualizarProducto(producto);

        return ResponseEntity.ok(new ApiResponseHttp("ok", productoActualizado));
    }

    @Operation(summary = "Eliminar un producto")
    @ApiResponse(
            responseCode = "200",
            description = "Producto eliminado correctamente",
            content = @Content(schema = @Schema(implementation = ApiResponseHttp.class))
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarProducto(@PathVariable Long id){
        productoUseCase.eliminarProducto(id);
        return ResponseEntity.ok(new ApiResponseHttp("ok", null));
    }
}
