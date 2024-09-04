FROM node:alpine

WORKDIR /usr/helloworldapp

COPY ./ ./

RUN npm install

EXPOSE 4002

CMD [ "npm", "start" ]