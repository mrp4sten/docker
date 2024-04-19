FROM ubuntu

# Install Dependencies
RUN apt update -y \
  && apt install curl -y \
  && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs -y

# Copy App
WORKDIR /app
COPY app.js ./

EXPOSE 3000

# Run App
CMD node app.js

# Exec Form
# CMD ["node", "app.js", "$HOME"]

# Entrypoint
# ENTRYPOINT [ "ls" ]
# CMD [ "-l" ]
