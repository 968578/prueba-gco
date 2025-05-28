package com.prueba_gco.prueba_gco.infraestructure.persistence.movimiento;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovimientoJpaRepository extends JpaRepository<MovimientoEntity, Long> {
    List<MovimientoEntity> findByProductoId(Long idProducto);
}
