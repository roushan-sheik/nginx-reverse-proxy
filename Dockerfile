FROM node:20-alpine

# Create app directory and set it as working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files into the app directory
COPY . .

# Expose the default port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
