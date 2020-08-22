FROM node:12

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

# RUN npm install
RUN yarn

# Bundle app source
COPY . .

RUN yarn run build

# compile source
CMD ["node", "dist/main.js"]