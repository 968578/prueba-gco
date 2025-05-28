package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Categoria;
import com.prueba_gco.prueba_gco.domain.ports.in.CategoriaUseCase;
import com.prueba_gco.prueba_gco.infraestructure.web.response.ApiResponseHttp;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Categorias", description = "Obtener las categorias")
@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    private final CategoriaUseCase categoriaUseCase;

    public CategoriaController(CategoriaUseCase categoriaUseCase){
        this.categoriaUseCase = categoriaUseCase;
    }

    @Operation(summary = "Obtener las catgetorias")
    @ApiResponse(
            responseCode = "200",
            description = "Categorias listadas correctamente",
            content = @Content(schema = @Schema(implementation = ApiResponseHttp.class))
    )
    @GetMapping
    public ResponseEntity<?> listarCategorias(){
         List<Categoria> categorias = categoriaUseCase.listarCategorias();
         return ResponseEntity.ok(new ApiResponseHttp<>("ok",categorias));
    }
}
