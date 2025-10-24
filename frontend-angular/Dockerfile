# Etapa 1: Build
FROM node:20 AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto al contenedor
COPY . .

# Construir la app en modo producción
RUN npm run build -- --output-path=dist

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar los archivos compilados de Angular al directorio de Nginx
COPY --from=build /app/dist/catalogo-frontend /usr/share/nginx/html

# Copiar configuración de Nginx si quieres rutas HTML5
# (opcional para routing de Angular)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
