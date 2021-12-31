FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

# AWS RDS vars
ARG POSTGRES_USER
ARG POSTGRES_HOST
ARG POSTGRES_PORT
ARG POSTGRES_PASSWORD
ARG POSTGRES_DB

ENV POSTGRES_USER 'postgres'
ENV POSTGRES_HOST 'main-fargate-px-db-psql.cwpohdwr2azc.us-east-1.rds.amazonaws.com'
ENV POSTGRES_PORT 5432
ENV POSTGRES_PASSWORD 12345678
ENV POSTGRES_DB 'postgres'

RUN npm install

RUN npm run build

COPY . .

CMD ["npm", "run", "start:dev"]
