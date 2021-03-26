FROM node:alpine

LABEL Marcelo Roncatto Ficagna "roncattomarcelo@gmail.com"

#COPY . .
WORKDIR /home/rest-api

RUN npm install

EXPOSE 3000

#RUN npm run dev
CMD [ "npm", "run", "dev"]