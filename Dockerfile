FROM oven/bun:alpine AS bun-builder
WORKDIR /app
ARG UMAMI_ID
ARG UMAMI_URL
ARG UMAMI_DOMAINS

COPY ./web/package.json ./web/bun.lock ./
RUN bun install --frozen-lockfile
COPY ./web .
RUN bun run build

FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY go.mod go.sum main.go ./
COPY --from=bun-builder /app/dist ./web/dist/
RUN CGO_ENABLED=0 go build -ldflags '-s -w' -o main main.go

FROM alpine AS runner
WORKDIR /app
COPY --from=builder /app/main .

ENV HOST=127.0.0.1
ENV PORT=3000
EXPOSE 3000
CMD ["/app/main"]
