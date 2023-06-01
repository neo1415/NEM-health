# Base image
FROM node:14-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Use a lightweight base image for production
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy built application from the builder stage
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
