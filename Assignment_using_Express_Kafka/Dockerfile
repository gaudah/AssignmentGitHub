FROM node:carbon
WORKDIR /app/docker
COPY package.json /app/docker
RUN npm install
COPY . /app/docker
CMD node server.js
EXPOSE 3000

