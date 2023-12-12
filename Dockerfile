# Use the Node.js 16 Alpine image for a smaller final image
FROM node:16-alpine

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of your application to the working directory
COPY . .

# Build your Next.js application
RUN npm run build

# The default command to run when starting the container
CMD ["npm", "start"]
