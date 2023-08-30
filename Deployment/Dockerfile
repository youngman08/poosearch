FROM node:18-alpine

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package.json ./

RUN yarn install \
  --prefer-offline \
  --production=false

COPY . ./

CMD [ "yarn", "start" ]
