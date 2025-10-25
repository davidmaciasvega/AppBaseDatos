# Etapa 1: Build Angular
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx ng build --configuration production

# Etapa 2: Servir con Node
FROM node:20

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY server.js ./
COPY package*.json ./

RUN npm install express

EXPOSE 8080
CMD ["node", "server.js"]
