FROM rust:latest AS base

WORKDIR /app
COPY . ./
RUN cargo build


FROM debian:bullseye AS runner
COPY --from=base /app /app

EXPOSE 3000

CMD cargo run

