# Define from what image we want to build from.
FROM node

# Create app directory
WORKDIR /usr/src/app

# Copy the application's source code into the current working directory for the image </usr/src/app> files inside .dockerignore wont be copied
COPY . .

# Install app dependencies
# If you are building your code for production
# RUN npm ci --only=production
RUN yarn install

# Expose the app's port to the docker daemon
EXPOSE 9000

# Default parameters that cannot be overridden when container runs with CLI parameters
#ENTRYPOINT [ "bash", "./db-seeder.sh" ]

# Define the command to run your app using CMD which defines your runtime.
CMD [ "node", "server.js"]
#CMD [ ]