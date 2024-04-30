FROM php:8.1

ENV TZ=America/Mexico_City

RUN apt update && apt install unzip -y

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY composer.* ./
RUN composer install --no-scripts
COPY . .

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0
