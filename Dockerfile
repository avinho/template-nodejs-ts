FROM node:alpine 

WORKDIR /usr/app

COPY package*.json ./

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate

RUN pm run migrate:init

EXPOSE 3333

CMD npm run dev
