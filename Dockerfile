FROM node:20-slim
WORKDIR /app

COPY package*.json ./
COPY node_modules/ ./node_modules/
COPY dist/ ./dist/

EXPOSE 3000
