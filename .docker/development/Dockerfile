FROM node:20.15.0

WORKDIR /usr/src/frontend-ecom


COPY package.json .
RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]