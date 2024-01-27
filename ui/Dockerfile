FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
COPY . /app

RUN npm install

EXPOSE 8020

CMD ["npm", "run", "dev"]
