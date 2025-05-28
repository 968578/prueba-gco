package com.prueba_gco.prueba_gco.infraestructure.persistence.movimiento;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.ports.out.MovimientoRepository;
import org.springframework.stereotype.Repository;

@Repository
public class MovimientoAdapter implements MovimientoRepository {
    private final MovimientoJpaRepository movimientoJpaRepo;

    public MovimientoAdapter(MovimientoJpaRepository movimientoJpaRepo){
        this.movimientoJpaRepo = movimientoJpaRepo;
    }

    private Movimiento toDomain(MovimientoEntity entity) {
        Movimiento movimiento = new Movimiento();
        movimiento.setId(entity.getId());
        movimiento.setProductoId(entity.getProductoId());
        movimiento.setTipo(entity.getTipo());
        movimiento.setCantidad(entity.getCantidad());
        movimiento.setFechaCreacion(entity.getFechaCreacion());
        movimiento.setDescripcion(entity.getDescripcion());
        return movimiento;
    }

    private MovimientoEntity toEntity(Movimiento movimiento) {
        MovimientoEntity entity = new MovimientoEntity();
        entity.setId(movimiento.getId());
        entity.setProductoId(movimiento.getProductoId());
        entity.setTipo(movimiento.getTipo());
        entity.setCantidad(movimiento.getCantidad());
        entity.setFechaCreacion(movimiento.getFechaCreacion());
        entity.setDescripcion(movimiento.getDescripcion());
        return entity;
    }



    public Movimiento crear(Movimiento movimiento){
        MovimientoEntity movimientoEntity = this.toEntity(movimiento);
        MovimientoEntity movimietnoEntityGuardado = movimientoJpaRepo.save(movimientoEntity);
        return toDomain(movimietnoEntityGuardado);
    }
}
