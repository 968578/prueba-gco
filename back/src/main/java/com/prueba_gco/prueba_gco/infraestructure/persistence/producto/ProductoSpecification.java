package com.prueba_gco.prueba_gco.infraestructure.persistence.producto;

import com.prueba_gco.prueba_gco.domain.model.filtro.ProductoFiltro;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;


public class ProductoSpecification {
    public static Specification<ProductoEntity> crearFiltro(ProductoFiltro productoFiltro){
        return (root, query, cb) ->{
            List<Predicate> predicates = new ArrayList<>();

            if(productoFiltro.getNombre() != null && !productoFiltro.getNombre().isEmpty()){
                predicates.add(cb.like(cb.lower(root.get("nombre")), "%"+ productoFiltro.getNombre().toLowerCase()+ "%"));
            }

            if(productoFiltro.getCodigo() != null && !productoFiltro.getCodigo().isEmpty()){
                predicates.add(cb.like(cb.lower(root.get("codigo")), "%"+ productoFiltro.getCodigo().toLowerCase()+ "%"));
            }

            if(productoFiltro.getCategoriaId() != null ){
                predicates.add(cb.equal(root.get("categoriaId"), productoFiltro.getCategoriaId()));
            }
            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
