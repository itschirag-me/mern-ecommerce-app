# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Remove src folder
RUN rm -rf src

# Removing devDependencies
RUN npm prune --production

# Expose port 3000 for the application to listen on
EXPOSE 8010

# Start the application
CMD ["node", "/app/build/server.js"]