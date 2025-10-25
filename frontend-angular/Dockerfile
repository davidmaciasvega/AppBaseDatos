# Etapa 1: Build de Angular
FROM node:20 AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Construir Angular en modo producción
RUN npx ng build --configuration production --output-path=dist/catalogo-frontend

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar build de Angular al directorio de Nginx
COPY --from=build /app/dist/catalogo-frontend /usr/share/nginx/html

# Configuración Nginx para rutas HTML5 de Angular
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
