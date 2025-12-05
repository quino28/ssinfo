# build
FROM node:23-bookworm AS base
WORKDIR /ssinfo

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

COPY . .

RUN npx prisma generate

RUN bun run build

# prod
FROM node:23-bookworm AS prod
WORKDIR /ssinfo

COPY --from=base /ssinfo/package.json ./
COPY --from=base /ssinfo/yarn.lock ./

COPY --from=base /ssinfo/.next ./.next
COPY --from=base /ssinfo/next.config.* ./
COPY --from=base /ssinfo/public ./public
COPY --from=base /ssinfo/lib ./lib

COPY --from=base /ssinfo/node_modules ./node_modules
COPY --from=base /ssinfo/prisma ./prisma

COPY --from=base /root/.bun /root/.bun
ENV PATH="/root/.bun/bin:$PATH"

EXPOSE 3000
CMD ["bun", "run", "start"]
