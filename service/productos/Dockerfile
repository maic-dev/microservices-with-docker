FROM node:20-alpine

WORKDIR /var/www

COPY package*.json ./

RUN npm install

COPY . /var/www

RUN npx prisma generate

CMD [ "npm", "start" ]