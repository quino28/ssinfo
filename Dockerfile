# --- Build Stage ---
FROM node:23-bookworm AS builder

WORKDIR /ssinfo
COPY package*.json ./
RUN yarn install

COPY prisma ./prisma
RUN yarn prisma generate

COPY . .
RUN yarn build

# --- Production Stage ---
FROM node:23-bookworm AS runner

WORKDIR /ssinfo
COPY --from=builder /ssinfo/.next ./.next
COPY --from=builder /ssinfo/public ./public
COPY --from=builder /ssinfo/package*.json ./
COPY --from=builder /ssinfo/next.config.ts ./
COPY --from=builder /ssinfo/prisma ./prisma

RUN yarn install --production

EXPOSE 3000
CMD ["yarn", "start"]
