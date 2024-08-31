FROM node:alpine

WORKDIR /usr/helloworldapp

COPY ./ ./

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]