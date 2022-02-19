FROM node:16-alpine3.14

ADD . /app

WORKDIR /app
COPY package.json ./
RUN npm install


EXPOSE 3030
VOLUME /app/logs

CMD npm start
