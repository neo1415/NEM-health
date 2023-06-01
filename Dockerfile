# Use an official Node.js runtime as the base image
FROM node:14 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Remove development dependencies
RUN yarn install --production --ignore-scripts --prefer-offline

# Use a lightweight Node.js image for the production build
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

# Install production dependencies
RUN yarn install --production --ignore-scripts --prefer-offline

# Expose the port that your application listens on
EXPOSE 3000

# Define the command to start your application
CMD ["yarn", "start"]
