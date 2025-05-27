package com.prueba_gco.prueba_gco.application.service;

import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.ports.in.ProductoUseCase;
import com.prueba_gco.prueba_gco.domain.ports.out.ProductoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ProductoService implements ProductoUseCase {
    private final ProductoRepository productoRepo;

    public ProductoService(ProductoRepository productoRepo){
        this.productoRepo = productoRepo;
    }


    @Override
    public Producto crearProducto(Producto producto) {
        if(producto.getFechaCreacion() == null){
            producto.setFechaCreacion(LocalDate.now().toString());
        }
        return productoRepo.guardar(producto);
    }

    @Override
    public List<Producto> listarProductos() {
        return productoRepo.listar();
    }


}
