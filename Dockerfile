FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --quiet

COPY . .

CMD ["npm", "run", "start:prod"]
