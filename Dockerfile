# Utiliza una imagen base con Node.js
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install -g serverless
RUN npm install

# Configura las variables de entorno necesarias
ENV NODE_OPTIONS=--max-old-space-size=4096

# Comando para desplegar la aplicación
CMD ["serverless", "deploy"]
