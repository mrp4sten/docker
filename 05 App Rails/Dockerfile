FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=America/Mexico_City

RUN apt update && apt install -y \
  ruby-full build-essential tzdata \
  && gem install bundler

WORKDIR /app

COPY Gemfile* ./
RUN bundle config set --local path vendor/bundle &&\
  bundle install
COPY . .

CMD bin/rails server --binding 0.0.0.0