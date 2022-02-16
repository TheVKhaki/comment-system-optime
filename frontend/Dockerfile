FROM registry.qpoker.io/sam.mosleh/base-images/node-frontend:14 as build-stage

COPY package.json /app/

RUN npm install

COPY ./ /app/

ARG FRONTEND_ENV=production

ENV APP_ENV=${FRONTEND_ENV}

# Comment out the next line to disable tests
# RUN npm run test

RUN BUILD_PATH='./dist/out' npm run build -- --configuration $APP_ENV

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.21

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
