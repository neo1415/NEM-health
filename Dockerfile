# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install application dependencies
RUN yarn install --production

# Copy the rest of the application code
COPY . .

# Expose the port that your application listens on
EXPOSE 3000

# Define the command to start your application
CMD ["yarn", "start"]