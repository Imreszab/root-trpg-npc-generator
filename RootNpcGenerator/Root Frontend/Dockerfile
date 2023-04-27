FROM node:19-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . . 
RUN npm run build
CMD ["npm", "start"]

