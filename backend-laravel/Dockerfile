# Imagen base oficial de PHP con extensiones necesarias
FROM php:8.2-apache

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    zip unzip git libpq-dev libonig-dev libzip-dev libpng-dev && \
    docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl bcmath gd

# Habilitar mod_rewrite para Laravel
RUN a2enmod rewrite

# Copiar archivos del proyecto
COPY . /var/www/html

# Establecer permisos
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Instalar dependencias de Laravel
WORKDIR /var/www/html
RUN composer install --no-dev --optimize-autoloader

# Generar clave de aplicación y migrar la base de datos
RUN php artisan key:generate || true

# Configuración del servidor Apache
EXPOSE 80
CMD ["apache2-foreground"]
