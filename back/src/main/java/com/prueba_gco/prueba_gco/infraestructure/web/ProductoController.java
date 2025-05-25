package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.ports.in.ProductoUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoUseCase productoUseCase;

    public ProductoController(ProductoUseCase productoUseCase){
        this.productoUseCase = productoUseCase;
    }

    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto){
        Producto productoCreado = productoUseCase.crearProducto(producto);
        return ResponseEntity.ok(productoCreado);
    }

    @GetMapping
    public ResponseEntity<List<Producto>> consultarProductos(){
        List<Producto> productos =  productoUseCase.listarProductos();
        return ResponseEntity.ok(productos);
    }
}
