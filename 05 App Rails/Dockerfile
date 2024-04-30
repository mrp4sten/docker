FROM ruby:3.0.2

ENV TZ=America/Mexico_City

WORKDIR /app

COPY Gemfile* ./
RUN bundle config set --local path vendor/bundle &&\
  bundle install
COPY . .

EXPOSE 3000

CMD bin/rails server --binding 0.0.0.0