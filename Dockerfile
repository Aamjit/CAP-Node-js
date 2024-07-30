# syntax=docker/dockerfile:1

ARG VARIANT="20"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
ARG CAPVER="latest"

# Install some generally useful tools
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl git sqlite3 entr source-highlight

# Install SAP CAP SDK globally
USER node
RUN npm install -g @sap/cds-dk@$CAPVER

# vi mode everywhere and nicer prompt KTHXBAI
RUN cat <<EOBASHRC >> /home/node/.bashrc
export EDITOR=vi
set -o vi
bind -x '"\C-l": clear'
EOBASHRC

RUN echo 'export PS1=${PS1/\$ /\\\\n$ }' >> /home/node/.bashrc

# Ready!
WORKDIR /home/node

# Copy your SAP CAP project files into the container
COPY . /home/node/

# # Install dependencies (if needed)
# RUN npm install

# Start your CAP application
CMD ["npm", "start"]

EXPOSE 4004

# # Use a Node.js base image
# FROM node:14-alpine

# # Set the working directory
# WORKDIR /usr/src/app

# ADD /../. .

# # Install dependencies (if needed)
# RUN npm install

# # Start your CAP application
# CMD ["npm", "start"]