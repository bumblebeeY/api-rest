FROM node:8.10.0-alpine
MAINTAINER Eleven <gyiriver@gmail.com>
RUN mkdir -p /home/project
WORKDIR /home/project
COPY package*.json ./
RUN npm config set registry "https://registry.npm.taobao.org"
RUN npm config set unsafe-perm true
RUN npm install
COPY . .
EXPOSE 6001
CMD ["npm","start"]