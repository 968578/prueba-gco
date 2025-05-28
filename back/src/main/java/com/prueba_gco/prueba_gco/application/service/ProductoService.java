package com.prueba_gco.prueba_gco.application.service;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.model.filtro.ProductoFiltro;
import com.prueba_gco.prueba_gco.domain.ports.in.ProductoUseCase;
import com.prueba_gco.prueba_gco.domain.ports.out.ProductoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService implements ProductoUseCase {
    private final ProductoRepository productoRepo;
    private final int TIPO_INGRESO = 1;
    public ProductoService(ProductoRepository productoRepo){
        this.productoRepo = productoRepo;
    }


    @Override
    public Producto crearProducto(Producto producto) {
        if(producto.getFechaCreacion() == null){
            producto.setFechaCreacion(LocalDateTime.now().toString());
        }
        return productoRepo.guardar(producto);
    }

    @Override
    public List<Producto> listarProductosFiltro(ProductoFiltro productoFiltro) {
        return productoRepo.listarFiltro(productoFiltro);
    }

    @Override
    public Optional<Producto> buscarProductoPorId(Long id){return productoRepo.buscarPorId(id);}

    @Override
    public Producto actualizarProducto(Producto producto){return productoRepo.actualizar(producto);}

    @Override
    public void eliminarProducto(Long id){productoRepo.eliminar(id);}

    @Override
    public Producto actualizarStock(Movimiento movimiento) {
        Long productoId =  movimiento.getProductoId();
        int tipoMovimiento = movimiento.getTipo();
        int cantidad = movimiento.getCantidad();

        Producto producto = productoRepo.buscarPorId(productoId)
                .orElseThrow(()->new RuntimeException("Producto no encontrado"));

        if(tipoMovimiento == this.TIPO_INGRESO){
            // si es ingreso
            producto.setStock(producto.getStock() + cantidad);
        } else {
            // si es egreso
            int nuevoStock = producto.getStock() - cantidad;
            if(nuevoStock < 0){
                throw new RuntimeException("No hay cantidad suficiente");
            }
            producto.setStock(nuevoStock);
        }
        return productoRepo.actualizar(producto);
    }
}
