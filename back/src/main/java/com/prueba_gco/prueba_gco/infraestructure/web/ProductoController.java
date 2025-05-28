package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.model.filtro.ProductoFiltro;
import com.prueba_gco.prueba_gco.domain.ports.in.ProductoUseCase;
import com.prueba_gco.prueba_gco.infraestructure.web.response.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoUseCase productoUseCase;

    public ProductoController(ProductoUseCase productoUseCase){
        this.productoUseCase = productoUseCase;
    }

    @PostMapping
    public ResponseEntity<?> crearProducto(@Valid @RequestBody Producto producto, BindingResult resultValidation){
        if(resultValidation.hasErrors()){
            return ResponseEntity.badRequest().body(ApiResponse.error(resultValidation));
        }
        Producto productoCreado = productoUseCase.crearProducto(producto);
        return ResponseEntity.ok(new ApiResponse("ok", productoCreado));
    }

    @PostMapping("/buscar")
    public ResponseEntity<?> consultarProductos(@RequestBody ProductoFiltro productoFiltro){
        List<Producto> productos =  productoUseCase.listarProductosFiltro(productoFiltro);
        return ResponseEntity.ok(new ApiResponse("ok", productos));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> consultarProductosPorId(@PathVariable Long id){
        Optional<Producto> producto=  productoUseCase.buscarProductoPorId(id);
        if(producto.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("error", null));
        }
        return ResponseEntity.ok(new ApiResponse("ok",producto));
    }

    @PutMapping
    public ResponseEntity<?> actualizarProducto(@Valid @RequestBody Producto producto, BindingResult resultValidation){
        if(resultValidation.hasErrors()){
            return ResponseEntity.badRequest().body(ApiResponse.error(resultValidation));
        }
        Producto productoActualizado = productoUseCase.actualizarProducto(producto);

        return ResponseEntity.ok(new ApiResponse("ok", productoActualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarProducto(@PathVariable Long id){
        productoUseCase.eliminarProducto(id);
        return ResponseEntity.ok(new ApiResponse("ok", null));
    }
}
