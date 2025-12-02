FROM node:23-bookworm

WORKDIR /ssinfo
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
