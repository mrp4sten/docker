FROM ubuntu:22.04

RUN apt update \
  && apt install curl -y \
  && curl -L https://go.dev/dl/go1.22.2.linux-386.tar.gz | \
  tar -zxvC /usr/local

ENV PATH "$PATH:/usr/local/go/bin"

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build

EXPOSE 8080

CMD  ./app-go