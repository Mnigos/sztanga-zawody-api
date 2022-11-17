
FROM node:18.12-alpine As development

ARG EnvironmentVariable

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.12-alpine As production

ARG NODE_ENV=production
ARG EnvironmentVariable
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm pkg delete scripts.prepare
RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]