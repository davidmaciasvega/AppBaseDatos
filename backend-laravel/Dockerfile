# Imagen base oficial de PHP con Apache
FROM php:8.2-apache

# Instalar dependencias necesarias
RUN apt-get update && apt-get install -y \
    zip unzip git libpq-dev libonig-dev libzip-dev libpng-dev && \
    docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl bcmath gd

# Habilitar mod_rewrite
RUN a2enmod rewrite

# Copiar los archivos del proyecto
COPY . /var/www/html

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Cambiar el DocumentRoot a la carpeta public de Laravel
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Configurar .htaccess y permisos
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["apache2-foreground"]
