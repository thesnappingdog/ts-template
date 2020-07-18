FROM node:latest
WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install pm2 -g
RUN npm install
COPY ./src ./src
RUN npm run build
RUN yarn build
COPY ./dist ./dist
EXPOSE 4000
CMD ["pm2-runtime","./dist/src/app.js"]