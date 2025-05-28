package com.prueba_gco.prueba_gco.application.service;

import com.prueba_gco.prueba_gco.domain.model.Categoria;
import com.prueba_gco.prueba_gco.domain.ports.in.CategoriaUseCase;
import com.prueba_gco.prueba_gco.domain.ports.out.CategoriaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService implements CategoriaUseCase {

    private final CategoriaRepository categoriaRepo;

    public CategoriaService(CategoriaRepository categoriaRepo){
        this.categoriaRepo = categoriaRepo;
    }

    @Override
    public List<Categoria> listarCategorias() {
        return categoriaRepo.listar();
    }
}
