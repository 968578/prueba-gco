package com.prueba_gco.prueba_gco.domain.ports.out;

import com.prueba_gco.prueba_gco.domain.model.Categoria;

import java.util.List;

public interface CategoriaRepository {
    List<Categoria> listar();
}
