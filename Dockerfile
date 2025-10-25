# Etapa 1: Build Angular
FROM node:20 AS build

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Construir Angular en modo producción
RUN npm run build -- --configuration production

# Etapa 2: Servir con Express
FROM node:20

WORKDIR /app

# Copiar los archivos de producción de Angular desde la etapa de build
COPY --from=build /app/dist/catalogo-frontend/browser ./browser

# Copiar server.js
COPY server.js .

# Instalar express
RUN npm install express

# Exponer el puerto que usará Render (usará variable de entorno)
EXPOSE 10000

# Comando para iniciar el server usando el puerto de Render
CMD ["node", "server.js"]
