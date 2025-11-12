# Use Node.js official image
FROM node:16.3.0

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the container
COPY . .

# Expose the React app port (frontend)
EXPOSE 3000

# Expose the Express app port (backend)
EXPOSE 8080

# Start the application (frontend and backend)
CMD ["npm", "run", "start"]
