FROM hypriot/rpi-node

RUN npm install -g @angular/cli

WORKDIR /web

COPY . /web
RUN npm install

CMD [ "ng", "serve" ]