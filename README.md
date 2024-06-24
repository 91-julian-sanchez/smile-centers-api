# Smile Centers API

Este proyecto es una API que permite obtener centros Smile Centers, filtrados por `Center_Type`, `Zone` y `Services`. Está implementado usando NestJS y el Serverless Framework, y se despliega en AWS Lambda.

## Requisitos

- Node.js 20.x
- Serverless Framework v4

## Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/91-julian-sanchez/smile-centers-api.git
   cd smile-centers-api
   ```

2. Instala las dependencias:
```bash
npm i serverless -g
npm install -g @nestjs/cli
npm install
```

3. Configura las variables de entorno. Crea un archivo .env en el directorio raíz del proyecto y añade las siguientes variables:
```
MONGODB_URI=<tu-uri-de-mongodb>
```

4. Configura tu cuenta de AWS para el despliegue. Asegúrate de tener las credenciales de AWS configuradas en tu máquina.

## Despliegue
1. Compila el proyecto:

```bash
npm run build
```
2. Despliega el proyecto a AWS Lambda usando Serverless Framework:

```bash
serverless deploy
```

## Ejecución Local
1. Compila el proyecto:

```bash
npm run build
```

2. Inicia el proyecto localmente:

```bash
npm start
```

3. La API estará disponible en http://localhost:3000.

## Uso
**Nota:** http://localhost:3000 se utiliza solo para el ambiente local. En ambientes desplegados, esta URL debe ser reemplazada por la URL del dominio correspondiente.

### Endpoints
Obtener Smile Centers
URL: /smile-center

Método: GET

Query Parameters:

* Center_Type (opcional)
* Zone (opcional)
* Services (opcional)

### Ejemplo de Uso

* Filtrar por centerType:
```bash
curl --location 'http://localhost:3000/smile-center?centerType=Centro%20Aliado'
```

Respuesta:
```
[
    {
        "name": "Citas Full Pereira",
        "address": "Calle 14",
        "calendarId": "7964022"
    }
]
```

* Filtrar por zone:
```bash
curl --location 'http://localhost:3000/smile-center?zone=Pereira'
```

Respuesta:
```
[
    {
        "name": "Citas Full Pereira",
        "address": "Calle 14",
        "calendarId": "7964022"
    }
]
```

* Filtrar por services:
```bash
curl --location 'http://localhost:3000/smile-center?service=fullprimera'
```
Respuesta:
```
[
    {
        "name": "Citas Full Pereira",
        "address": "Calle 14",
        "calendarId": "7964022",
        "appointmentTypeId": "53474599"
    }
]
```
## Documentación

La documentación de la API está disponible en Swagger. Para acceder a Swagger UI, sigue los siguientes pasos:

1. Asegúrate de que la aplicación esté corriendo localmente.
2. Abre tu navegador web y navega a `http://localhost:3000/docs`.

Swagger UI te permitirá explorar y probar los endpoints de la API de forma interactiva.

## Scripts Disponibles
* `npm run build`: Compila el proyecto.
* `npm start`: Inicia la aplicación en modo producción.
* `npm run start:dev`: Inicia la aplicación en modo desarrollo con recarga en caliente.
* `npm run format`: Formatea el código usando Prettier.
* `npm test`: Ejecuta las pruebas unitarias.
* `npm run test:watch`: Ejecuta las pruebas unitarias en modo watch.
* `npm run test:cov`: Ejecuta las pruebas unitarias y genera un informe de cobertura.
* `npm run test:debug`: Inicia las pruebas en modo debug.
* `npm run test:e2e`: Ejecuta las pruebas end-to-end.