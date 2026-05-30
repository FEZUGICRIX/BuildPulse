# --- Stage 1: Build ---
FROM node:24-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

RUN pnpm rebuild prisma @prisma/engines @swc/core

COPY prisma ./prisma
COPY tsconfig*.json nest-cli.json ./
RUN pnpm exec prisma generate

COPY . .
RUN pnpm run build

# --- Stage 2: Runner ---
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Создаем пользователя и группу
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Добавляем --chown=nestjs:nodejs, чтобы у юзера были права на файлы
COPY --from=builder --chown=nestjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nestjs:nodejs /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/package.json ./

EXPOSE 4000

# Переключаемся на нерутового пользователя
USER nestjs

# Запускаем через shell-формат внутри массива, вызывая бинарники напрямую из node_modules
CMD ["sh", "-c", "./node_modules/.bin/prisma migrate deploy && node dist/prisma/seed.js && node dist/main.js"]
