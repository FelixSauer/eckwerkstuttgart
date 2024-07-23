FROM node:latest AS build
WORKDIR /app

COPY . .

RUN rm -rf node_modules/ package-lock.json
RUN npm install -g npm
RUN npm install

RUN npm run build

FROM httpd:latest AS runtime
RUN echo "EckwerkStuttgart" >> /usr/local/apache2/conf/httpd.conf

COPY --from=build /app/dist /usr/local/apache2/htdocs/

RUN mkdir -p /usr/local/apache2/logs && \
    chmod -R 755 /usr/local/apache2/logs && \
    touch /usr/local/apache2/logs/access_log && \
    touch /usr/local/apache2/logs/error_log

EXPOSE 80

CMD ["httpd-foreground"]
