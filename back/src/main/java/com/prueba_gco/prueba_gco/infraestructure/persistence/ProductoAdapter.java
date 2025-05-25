package com.prueba_gco.prueba_gco.infraestructure.persistence;

import com.prueba_gco.prueba_gco.domain.model.Producto;
import com.prueba_gco.prueba_gco.domain.ports.out.ProductoRepository;
import org.springframework.stereotype.Repository;

@Repository
public class ProductoAdapter implements ProductoRepository {
    private final ProductoJpaRepository productoJpaRepo;

    public ProductoAdapter (ProductoJpaRepository productoJpaRepo){
        this.productoJpaRepo = productoJpaRepo;
    }

    private Producto toDomain(ProductoEntity productoEntity){
        return new Producto(
                productoEntity.getStock(),
                productoEntity.getId(),
                productoEntity.getNombre(),
                productoEntity.getDescripcion(),
                productoEntity.getEstado(),
                productoEntity.getPrecio(),
                productoEntity.getCodigo(),
                productoEntity.getFechaCreacion(),
                productoEntity.getCategoriaId()
        );
    }

    private ProductoEntity toEntity(Producto producto){
        return new ProductoEntity(
                producto.getStock(),
                producto.getId(),
                producto.getNombre(),
                producto.getDescripcion(),
                producto.getEstado(),
                producto.getPrecio(),
                producto.getCodigo(),
                producto.getFechaCreacion(),
                producto.getCategoriaId()
        );
    }

    public Producto guardar(Producto producto){
        ProductoEntity productoEntity = this.toEntity(producto);
        ProductoEntity productoEntityGuardado =  productoJpaRepo.save(productoEntity);
        return this.toDomain(productoEntityGuardado);
    }



}
