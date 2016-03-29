FROM node:5.9.1-wheezy
# replace this with your application's default port

RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]