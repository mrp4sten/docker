FROM python:3.10-slim AS base
RUN apt update && apt install -y default-libmysqlclient-dev
RUN pip install pipenv --verbose
WORKDIR /app

FROM base AS builder
RUN apt install -y build-essential
ENV PIPENV_VENV_IN_PROJECT=1
COPY Pipfile* ./
RUN pipenv install --verbose


FROM base AS runner
ENV FLASK_APP=todos.app
COPY --from=builder /app/.env ./.venv
COPY . .
EXPOSE 5000
CMD pipenv run flask run --host 0.0.0.0