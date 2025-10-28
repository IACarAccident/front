FROM oven/bun:1

WORKDIR /app

RUN bun create next-app . --yes --typescript --eslint

RUN bun install

EXPOSE 3000

CMD ["bun", "run", "dev", "--", "--hostname", "0.0.0.0"]
