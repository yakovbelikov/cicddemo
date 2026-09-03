FROM node:24-alpine AS base
RUN corepack enable pnpm

FROM base AS builder
WORKDIR /app 
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS production
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

ENV HOSTNAME=0.0.0.0

EXPOSE 3000

CMD ["node", "./server.js"]