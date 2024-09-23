FROM node:18-alpine

WORKDIR /var/www

COPY package*.json ./

RUN npm install --prod

COPY . /var/www

RUN npx prisma generate

CMD [ "npm", "start" ]