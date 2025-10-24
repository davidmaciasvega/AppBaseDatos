# Imagen base de PHP con Apache
FROM php:8.2-apache

# Instalar dependencias del sistema y extensiones PHP
RUN apt-get update && apt-get install -y \
    zip unzip git libpq-dev libonig-dev libzip-dev libpng-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl bcmath gd

# Habilitar mod_rewrite
RUN a2enmod rewrite

# Establecer directorio de trabajo
WORKDIR /var/www/html

# Copiar todo el backend (incluye vendor)
COPY . /var/www/html

# Crear carpetas necesarias si no existen
RUN mkdir -p storage bootstrap/cache

# Establecer permisos correctos
RUN chown -R www-data:www-data storage bootstrap/cache

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Instalar dependencias del proyecto si no existe vendor
RUN [ -d vendor ] || composer install --no-dev --optimize-autoloader

# Generar clave de aplicación solo si no existe APP_KEY
RUN php artisan key:generate --force || true

# Configuración de Apache para usar la carpeta public
RUN sed -i 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf

# Exponer el puerto usado por Render
EXPOSE 10000

# Entry point: limpiar caches y generar caches en runtime
# Esto asegura que Laravel vea las Environment Variables de Render
CMD php artisan config:clear && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache && \
    apache2-foreground
