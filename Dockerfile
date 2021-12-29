FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY . .

CMD ["npm", "run", "start:dev"]
