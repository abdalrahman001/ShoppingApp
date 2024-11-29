# Backend Dockerfile
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend code
COPY . .

# Expose the port used by the backend (e.g., 3000)
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
