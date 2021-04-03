# Instalar node version 12
FROM node:12

# Crear una nueva carpeta par alojar nuestro servidor
RUN mkdir -p /usr/src/app

# Moverme a la carpeta
WORKDIR /usr/src/app

# Copiar packages
COPY package*.json ./

# Ejecutar el comando npm install para instalar dependencias
RUN npm install 

# Copia el directorio actual dentro de la carpeta actual
COPY . .

# Expone el puerto 3000
EXPOSE 3000

CMD [ "npm", "start" ]