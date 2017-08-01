# Serving static site 
FROM hypriot/rpi-node

RUN npm install -g static-server

WORKDIR /web

COPY ./dist /web
# RUN npm install

CMD [ "static-server", "-p", "3000" ]