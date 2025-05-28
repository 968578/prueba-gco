package com.prueba_gco.prueba_gco.domain.ports.in;

import com.prueba_gco.prueba_gco.domain.model.Categoria;

import java.util.List;

public interface CategoriaUseCase {
    List<Categoria> listarCategorias();
}
