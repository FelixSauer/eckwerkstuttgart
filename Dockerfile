FROM node:lts AS build
WORKDIR /app
ENV BASE_URL=/eckwerkstuttgart
COPY . .
RUN npm i
RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
ENTRYPOINT ["httpd-foreground"]
