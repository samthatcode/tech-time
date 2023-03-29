## landing page for TalentPlus Frontend Developer task

## Instruction to build and run the app

(1) Created a Dockerfile in the root directory of your Vite project
<!-- 
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
 -->

This Dockerfile uses the version 16 of Node.js, creates a working directory called /app, copies the package.json and package-lock.json files into the working directory, installs the dependencies using npm install, copies the rest of the application code into the container, and starts the development server using npm run dev.

(2) Build the Docker image using the following command:
docker build -t dockerized-react .
# This command will build a Docker image called dockerized-react

(3) Run the Docker container using the following command:
docker run -d -p 5000:5177 --name vite-techh dockerized-react

# This command will start a Docker container and expose port 5177 for the app to run on and map in port 5000. You can access the app by opening your web browser and navigating to http://localhost:5000.


