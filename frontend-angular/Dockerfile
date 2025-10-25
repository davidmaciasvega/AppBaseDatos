# -----------------------------
# Etapa 1: Build de Angular
# -----------------------------
FROM node:20 AS build

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto al contenedor
COPY . .

# Build de Angular en modo producción, outputPath correcto
RUN npm run build -- --configuration production --output-path=dist/catalogo-frontend

# -----------------------------
# Etapa 2: Servir con Nginx
# -----------------------------
FROM nginx:alpine

# Copiar build de Angular al root de Nginx
COPY --from=build /app/dist/catalogo-frontend /usr/share/nginx/html

# Copiar configuración personalizada de Nginx para Angular HTML5 routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
