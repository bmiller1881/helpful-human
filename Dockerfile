FROM node:16.13
ARG uri
ENV MONGODB_CONNECTION=$uri
WORKDIR /usr/src/app
COPY . .
RUN npm ci && npm cache clean --force && npm run build
EXPOSE 3000
CMD [ "npm", "start" ]