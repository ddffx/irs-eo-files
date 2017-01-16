FROM node:latest

# Install dependencies 
RUN npm set progress=false && \
    npm install -g --progress=false yarn
RUN npm set progress=false && \
    npm install -g --progress=false yo generator-nm generator-rise generator-mnm
# Add a yeoman user because yo doesn't like being root
RUN adduser --disabled-password --gecos "" yeoman; \
  echo "yeoman ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER yeoman
CMD /bin/bash
