package com.prueba_gco.prueba_gco.domain.model;


import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class Producto {

    private Long id;

    @NotNull(message = "No puede ser null")
    @Size(max = 45, message = "No puede superar 45 caracteres")
    private String nombre;

    @Size(max = 200, message = "No puede superar 200 caracteres")
    private String descripcion;

    @NotNull(message = "No puede ser null")
    @Min(value = 0, message = "El valor mínimo es 0")
    @Max(value = 1, message = "El valor máximo es 1")
    private Integer estado;

    private Integer precio;

    @NotNull(message = "No puede ser null")
    private Integer stock;

    @NotNull(message = "No puede ser null")
    @Size(max = 20, message = "No puede superar 20 caracteres")
    private String codigo;

    private String fechaCreacion;

    @NotNull(message = "No puede ser null")
    private Long categoriaId;

    public Producto(Integer stock, Long id, String nombre, String descripcion, Integer estado, Integer precio, String codigo, String fechaCreacion, Long categoriaId) {
        this.stock = stock;
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = estado;
        this.precio = precio;
        this.codigo = codigo;
        this.fechaCreacion = fechaCreacion;
        this.categoriaId = categoriaId;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", estado=" + estado +
                ", precio=" + precio +
                ", stock=" + stock +
                ", codigo='" + codigo + '\'' +
                ", fechaCreacion='" + fechaCreacion + '\'' +
                ", categoriaId=" + categoriaId +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Long getCategoriaId() {
        return categoriaId;
    }

    public void setCategoriaId(Long categoriaId) {
        this.categoriaId = categoriaId;
    }
}
