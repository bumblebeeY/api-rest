FROM node
MAINTAINER Eleven <gyiriver@gmail.com>
RUN mkdir -p /home/project
WORKDIR /home/project
EXPOSE 6001
RUN npm config set registry "https://registry.npm.taobao.org"
RUN npm install pm2 -g
RUN npm install
CMD ["npm","start"]