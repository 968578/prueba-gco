package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Categoria;
import com.prueba_gco.prueba_gco.domain.ports.in.CategoriaUseCase;
import com.prueba_gco.prueba_gco.infraestructure.web.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    private final CategoriaUseCase categoriaUseCase;

    public CategoriaController(CategoriaUseCase categoriaUseCase){
        this.categoriaUseCase = categoriaUseCase;
    }

    @GetMapping
    public ResponseEntity<?> listarCategorias(){
         List<Categoria> categorias = categoriaUseCase.listarCategorias();
         return ResponseEntity.ok(new ApiResponse<>("ok",categorias));
    }
}
