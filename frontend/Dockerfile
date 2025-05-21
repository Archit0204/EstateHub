
FROM node:23-alpine AS build

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

# Serve the app using a static file server (like serve)
FROM nginx:alpine

# Copy the build output from the previous stage to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]