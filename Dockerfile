FROM node:carbon
WORKDIR /app/docker
COPY package.json /app/docker
RUN npm install
COPY . /app/docker
CMD node clusterServer.js
EXPOSE 3000

