FROM node:12

ARG MYSQL_HOST
ARG MYSQL_USER
ARG MYSQL_PASSWORD

COPY package.json ./
COPY yarn.lock ./

# RUN npm install
RUN yarn

# Bundle app source
COPY . .

RUN npm run build

# compile source
CMD ["node", "dist/main.js"]
