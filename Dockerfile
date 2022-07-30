# Use NodeJS base image
FROM node:16 AS build-stage

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY ./ ./

RUN npm install -g typescript

RUN npm install

RUN tsc

COPY ./package*.json ./www/

# Stage 2
FROM node:16

WORKDIR /usr/src

COPY --from=build-stage /usr/src/app/www/ ./

RUN npm install

# Bind the port that the image will run on
EXPOSE 8080

# Define the Docker image's behavior at runtime
CMD ["node", "server.js"]
