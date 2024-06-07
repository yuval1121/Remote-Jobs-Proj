FROM node:22-alpine

WORKDIR /client

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm","run","dev"]