package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.model.filtro.ProductoFiltro;
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

    @PostMapping("/buscar")
    public ResponseEntity<List<Producto>> consultarProductos(@RequestBody ProductoFiltro productoFiltro){
        List<Producto> productos =  productoUseCase.listarProductosFiltro(productoFiltro);
        return ResponseEntity.ok(productos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> consultarProductosPorId(@PathVariable Long id){
        return productoUseCase.buscarProductoPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<Producto> actualizarProducto(@RequestBody Producto producto){
        Producto productoActualizado = productoUseCase.actualizarProducto(producto);
        return ResponseEntity.ok(productoActualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id){
        productoUseCase.eliminarProducto(id);
        return ResponseEntity.ok().build();
    }
}
