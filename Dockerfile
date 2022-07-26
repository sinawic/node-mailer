FROM node:17-alpine3.14
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "index.js", "./"]

RUN npm install --production

WORKDIR /app

EXPOSE 3000

CMD [ "npm", "start" ]