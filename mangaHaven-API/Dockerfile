# Base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Change directory to where tsconfig.json is located
WORKDIR /usr/src/app/haven

# Compile TypeScript
RUN npx tsc

# Change back to the root directory
WORKDIR /usr/src/app

# Expose the port your application runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]