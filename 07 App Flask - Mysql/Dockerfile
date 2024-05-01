FROM python:3.10-slim

RUN apt update && apt install -y default-libmysqlclient-dev build-essential
RUN pip install pipenv --verbose

ENV PIPENV_VENV_IN_PROJECT=1
ENV FLASK_APP=todos.app

WORKDIR /app
COPY Pipfile* ./
RUN pipenv install --verbose
COPY . .

EXPOSE 5000

CMD pipenv run flask run --host 0.0.0.0