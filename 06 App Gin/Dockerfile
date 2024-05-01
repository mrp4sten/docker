FROM golang AS builder

ENV PATH "$PATH:/usr/local/go/bin"

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build

FROM scratch
WORKDIR /app
COPY --from=builder /app/app-go ./

EXPOSE 8080

CMD  ./app-gor