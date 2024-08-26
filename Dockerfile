# Stage 1: Build the Node.js application
FROM node:latest AS build
WORKDIR /app

# Copy all files to the container
COPY . .

# Clean up any previous node_modules and package-lock.json, then install dependencies
RUN rm -rf node_modules/ package-lock.json
RUN npm install -g npm
RUN npm install

# Build the application
RUN npm run build

# Stage 2: Set up the Apache HTTP server
FROM httpd:latest AS runtime

# Note: Removed the line that adds the invalid 'EckwerkStuttgart' command to httpd.conf

# Copy the built application from the build stage to the Apache document root
COPY --from=build /app/dist /usr/local/apache2/htdocs/

# Set up Apache logs directory and files with correct permissions
RUN mkdir -p /usr/local/apache2/logs && \
    chmod -R 755 /usr/local/apache2/logs && \
    touch /usr/local/apache2/logs/access_log && \
    touch /usr/local/apache2/logs/error_log

# Expose port 80
EXPOSE 80

# Start Apache in the foreground
CMD ["httpd-foreground"]



<v/pve/vm-400-disk-0,if=none,id=drive-usb0,discard=on,format=raw,cache=none,aio=io_uring,detect-zeroes>
args: -set drive.drive-scsi0.readonly=on -drive 'file=/dev/pve/vm-101-disk-0,if=none,id=drive-usb0,discard=on,format=raw,cache=none,aio=io_uring,detect-zeroes=unmap' -device 'usb-storage,drive=drive-usb0,bootindex=1,removable=on'
