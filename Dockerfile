FROM wearecoarmot/crawling-ui:latest

ENV LD_LIBRARY_PATH=/usr/local/lib

COPY . /crawling-ui
WORKDIR /crawling-ui

RUN pip3.8 install --upgrade pip && pip3.8 install -r requirements.txt && mv uwsgi.ini.template uwsgi.ini
RUN python3.8 manage.py makemigrations && python3.8 manage.py migrate && python3.8 manage.py createadmin

WORKDIR /crawling-ui/client
RUN npm install && npm run build

WORKDIR /

RUN mv ./crawling-ui/bin/run.sh ./run.sh && chmod 755 ./run.sh
