FROM node:22-alpine

WORKDIR /server

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD [ "npm", "start" ] 