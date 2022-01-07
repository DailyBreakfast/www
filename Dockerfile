# docker build -t angular-app .
# docker run --rm -it -p 4200:80 angular-app
FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
