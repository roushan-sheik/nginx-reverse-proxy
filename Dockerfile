FROM node:20-slim
WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
COPY node_modules/ ./node_modules/
COPY dist/ ./dist/

CMD ["node", "dist/app/server.js"]