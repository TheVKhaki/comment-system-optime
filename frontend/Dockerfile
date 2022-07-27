FROM node:16 as build-stage

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
FROM nginx:1.23

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build/ /usr/share/nginx/html
