FROM node:16

EXPOSE 3000

RUN mkdir /server
WORKDIR /server

RUN npm install npm@latest -g

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]