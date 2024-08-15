FROM oven/bun AS build

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun docs:build

EXPOSE 8080

CMD ["bun", "docs:preview"]