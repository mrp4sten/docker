FROM golang

ENV PATH "$PATH:/usr/local/go/bin"

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build

EXPOSE 8080

CMD  ./app-go