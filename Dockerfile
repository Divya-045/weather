FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default files
RUN rm -rf ./*

# Copy all app files
COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
