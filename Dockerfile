#Stage 1
FROM node:16-alpine AS builde
RUN mkdir -p /app/build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

#Stage 2
EXPOSE 5177
CMD [ "npm", "run", "dev" ]