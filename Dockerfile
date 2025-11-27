FROM node:23-alpine

WORKDIR /ssinfo
COPY package*.json ./
RUN yarn install

COPY . .
CMD ["yarn", "start"]
