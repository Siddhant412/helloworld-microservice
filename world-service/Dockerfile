FROM node:alpine

WORKDIR /usr/helloworldapp

COPY ./ ./

RUN npm install

EXPOSE 4001

CMD [ "npm", "start" ]