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
## 🧩 Diagrama de la Aplicación

La estructura de la aplicación sigue una arquitectura hexagonal, organizada de la siguiente manera:

```
📦 src
 └── 📦 main
     └── 📁 java
          └── 📦 com.example.productos
               ├── 📁 domain          # Entidades del dominio y casos de uso
               │    ├── 📁 model      # Entidades del dominio (Producto, Movimiento, etc.)
               │    └── 📁 usecase    # Casos de uso del negocio (crear, listar, actualizar, etc.)
               ├── 📁 application     # Servicios de aplicación que orquestan los casos de uso
               ├── 📁 infrastructure  # Adaptadores externos: controladores REST, repositorios, etc.
               └── 📁 config          # Configuraciones generales (Swagger, CORS, etc.)
```

### 🧱 Estructura por capas

La aplicación está diseñada siguiendo los principios de la **arquitectura hexagonal (Ports and Adapters)**, lo que permite una clara separación entre la lógica de negocio y los detalles de infraestructura.

- **`domain.model`**  
  Contiene las entidades del dominio (por ejemplo: `Producto`, `Movimiento`). Estas representan el núcleo del negocio y son independientes de cualquier tecnología.

- **`domain.usecase`**  
  Define e implementa los casos de uso del negocio. Aquí se concentra la lógica central, como crear, actualizar, listar productos o movimientos.

- **`application`**  
  Orquesta los casos de uso definidos en el dominio. Actúa como una capa intermedia que transforma datos, aplica validaciones y expone servicios a los adaptadores. No contiene lógica de infraestructura.

- **`infrastructure`**  
  Implementa los adaptadores externos: controladores REST, repositorios JPA, mappers, clientes HTTP, etc. Esta capa se comunica con la capa de `application` para ejecutar los casos de uso.

- **`config`**  
  Contiene configuraciones generales como CORS.

Este diseño mejora la mantenibilidad, facilita las pruebas unitarias y permite cambiar componentes tecnológicos sin afectar el núcleo del negocio.


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