FROM node:24-alpine
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY prisma ./prisma
COPY prisma.config.ts ./
COPY tsconfig*.json nest-cli.json ./
RUN pnpm exec prisma generate

COPY . .

RUN pnpm run build

EXPOSE 3001

CMD ["node", "dist/main"]
