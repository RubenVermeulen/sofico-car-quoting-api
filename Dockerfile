FROM node:8-alpine

# create app working dir
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# bundle app source
COPY dist ./

EXPOSE 3000
CMD ["node", "main.js"]

