FROM node:11.10.0

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]


You may push a new image to this repository using the CLI:

docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
Make sure to change tagname with your desired image repository tag.