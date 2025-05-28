package com.prueba_gco.prueba_gco.infraestructure.persistence.categoria;

import com.prueba_gco.prueba_gco.domain.model.Categoria;
import com.prueba_gco.prueba_gco.domain.ports.out.CategoriaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoriaAdapter implements CategoriaRepository {

    private final CategoriaJpaRepository categoriaJpaRepo;

    public CategoriaAdapter(CategoriaJpaRepository categoriaJpaRepo){
        this.categoriaJpaRepo = categoriaJpaRepo;
    }

    public Categoria toDomain(CategoriaEntity categoriaEntity){
        Categoria categoria=   new Categoria();
        categoria.setId(categoriaEntity.getId());
        categoria.setNombre(categoriaEntity.getNombre());
        return categoria;
    }

    @Override
    public List<Categoria> listar() {
        return categoriaJpaRepo.findAll()
                .stream().map(this::toDomain)
                .toList();
    }
}
