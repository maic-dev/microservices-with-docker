FROM node:20-alpine

WORKDIR /var/www

COPY package*.json ./

RUN npm install --include=dev

COPY . /var/www

RUN npm run build

RUN npm prune --production

CMD [ "npm", "start" ]