# Build Stage
FROM node:18 AS build

WORKDIR /app

ENV NODE_ENV=development

COPY package.json package-lock.json ./
RUN npm install --force

COPY . .

RUN npm run build

# Production Stage
FROM nginx:1.25-alpine

# Clear default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend from previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
