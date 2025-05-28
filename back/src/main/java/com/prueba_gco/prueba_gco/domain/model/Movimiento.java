package com.prueba_gco.prueba_gco.domain.model;


import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class Movimiento {

    private Long id;

    @NotNull(message = "No puede ser null")
    private Long productoId;

    @NotNull(message = "No puede ser null")
    @Min(value = 1, message = "El valor mínimo es 1")
    @Max(value = 2, message = "El valor máximo es 2")
    private Integer tipo;

    @NotNull(message = "No puede ser null")
    @Min(value = 1, message = "El valor mínimo es 1")
    private Integer cantidad;

    private String fechaCreacion;

    private String descripcion;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProductoId() {
        return productoId;
    }

    public void setProductoId(Long productoId) {
        this.productoId = productoId;
    }

    public Integer getTipo() {
        return tipo;
    }

    public void setTipo(Integer tipo) {
        this.tipo = tipo;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
