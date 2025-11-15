FROM node:23-bookworm AS builder

# --- Build Stage ---
FROM node:23-bookworm AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Production Stage ---
FROM node:23-bookworm AS runner

WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.ts ./

RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
