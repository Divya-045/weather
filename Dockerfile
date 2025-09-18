# Use lightweight Nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default files
RUN rm -rf ./*

# Copy app files
COPY index.html .
COPY style.css .
COPY script.js .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
