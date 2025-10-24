# Imagen base de PHP con Apache
FROM php:8.2-apache

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    zip unzip git libpq-dev libonig-dev libzip-dev libpng-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl bcmath gd

# Habilitar mod_rewrite para Laravel
RUN a2enmod rewrite

# Copiar archivos del proyecto
COPY . /var/www/html

# Crear carpetas necesarias si no existen
RUN mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache

# Establecer permisos correctos
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Establecer directorio de trabajo
WORKDIR /var/www/html

# Instalar dependencias del proyecto
RUN composer install --no-dev --optimize-autoloader

# Generar clave de aplicación (si no existe)
RUN php artisan key:generate --force || true

# Configuración de Apache (para que Render use la raíz pública)
RUN sed -i 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf

# Limpiar caches de Laravel
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

# Exponer el puerto usado por Render
EXPOSE 10000

# Iniciar Apache
CMD ["apache2-foreground"]
