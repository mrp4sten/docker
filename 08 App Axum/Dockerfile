FROM rust:latest AS base

WORKDIR /app
COPY . ./
RUN cargo build

EXPOSE 3000

CMD cargo run

