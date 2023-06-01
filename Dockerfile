# Use the official Node.js image as the base
FROM node:14-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Use a lightweight base image for production
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next

# Install production dependencies
RUN yarn install --production --frozen-lockfile

# Expose the desired port
EXPOSE 3000

# Set the environment variable
ENV NODE_ENV=production

# Start the application
CMD ["yarn", "start"]
