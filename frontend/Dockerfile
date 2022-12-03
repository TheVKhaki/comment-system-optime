FROM node:16.16.0-bullseye as build-stage

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

ARG FRONTEND_ENV=production
RUN mv .env.$FRONTEND_ENV .env && \
    rm .env.*

# Comment out the next line to disable tests
# RUN npm run test

RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM bitnami/nginx:1.23.2-debian-11-r4

COPY ./nginx.conf /opt/bitnami/nginx/conf/server_blocks/default.conf

COPY --from=build-stage --chown=1001:1001 /app/build /app
