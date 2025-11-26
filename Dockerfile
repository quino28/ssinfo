FROM node:23-bookworm

WORKDIR /ssinfo
COPY package*.json ./
RUN yarn install

COPY . .
CMD ["yarn", "start"]
