FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install --production

COPY ./dist ./dist

EXPOSE 4000

CMD ["node","./dist/src/app.js"]