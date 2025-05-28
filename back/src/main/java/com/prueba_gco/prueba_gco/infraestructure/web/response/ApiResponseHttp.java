package com.prueba_gco.prueba_gco.infraestructure.web.response;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.Map;
import java.util.stream.Collectors;

public class ApiResponseHttp<T> {
    private String name;
    private T data;

    public ApiResponseHttp(String name, T data) {
        this.name = name;
        this.data = data;
    }

    public static Map<String, String> obtenerErrores(BindingResult resultValidation){
        return resultValidation.getFieldErrors()
                .stream()
                .collect(Collectors.toMap(
                        FieldError::getField,
                        FieldError::getDefaultMessage,
                        (mensajeExistente, nuevoMensaje) -> mensajeExistente + ", " + nuevoMensaje
                ));
    }

    public static <T> ApiResponseHttp<T> error(BindingResult resultValidation) {
        Map<String, String> errores = obtenerErrores(resultValidation);
        return new ApiResponseHttp<>("error", (T) errores);
    }


    public String getName() { return name; }
    public Object getData() { return data; }
}
