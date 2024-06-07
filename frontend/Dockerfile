FROM cypress/base:22.0.0

WORKDIR /client

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm","run","dev"]