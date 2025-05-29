# Prueba Técnica GCO

Esta es una aplicación desarrollada como parte de una prueba técnica. Permite gestionar productos y realizar movimientos de entrada o salida sobre los mismos.

## ✨ Funcionalidades principales

- Crear productos
- Listar productos
- Actualizar productos
- Eliminar productos
- Crear movimientos (entradas o salidas)

## 🛠️ Tecnologías utilizadas

- **Java** 21
- **Spring Boot**
- **Maven** como gestor de dependencias
- **MySQL** 8.0.3


---

## ⚙️ Configuración previa

### 📂 Backend (Spring Boot)

1. Asegúrate de tener **MySQL 8.0.3** instalado y corriendo localmente.
2. Crea una base de datos con el nombre esperado por la aplicación (por ejemplo: `prueba_gco`).
3. Configura las credenciales de conexión a la base de datos en el archivo `src/main/resources/application.yml` o `application.properties`.


### 🌐 Frontend (Angular)

1. Navega al directorio del frontend (por ejemplo `./front`).
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación:

   ```bash
   ng serve
   ```

   Esto abrirá la app en: [http://localhost:4200](http://localhost:4200)

---

## 🚀 Ejecución del Backend

Desde el directorio raíz del proyecto backend (donde está el `pom.xml`), ejecuta:

```bash
mvn spring-boot:run
```

La aplicación estará disponible en: [http://localhost:8080](http://localhost:8080)

---

## 📚 Documentación de la API

Una vez levantado el backend, puedes acceder a la documentación de Swagger UI en:

👉 [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

Desde allí podrás explorar y probar los endpoints disponibles.

---

## ✅ Endpoints principales

- `POST /productos`: Crear un producto
- `GET /productos`: Listar productos
- `PUT /productos/{id}`: Actualizar un producto
- `DELETE /productos/{id}`: Eliminar un producto
- `POST /movimientos`: Crear un movimiento (entrada o salida)

---

## 📎 Notas

- Asegúrate de que la base de datos esté corriendo antes de iniciar la aplicación.
- Puedes utilizar herramientas como [Postman](https://www.postman.com/) para probar la API si no usas Swagger.