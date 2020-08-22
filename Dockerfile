FROM node:12


WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

# RUN npm install
RUN yarn

# Bundle app source
COPY . .

RUN yarn run build

ENV NODE_ENV=production

# compile source
CMD ["node", "dist/main.js"]