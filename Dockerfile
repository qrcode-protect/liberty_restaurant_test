FROM nginx

COPY ./public_flutter ./usr/share/nginx/html
COPY ./default.conf ./etc/nginx/conf.d/default.conf
COPY ./certificate/nginx-certificate.crt ./etc/nginx/certificate/nginx-certificate.crt
COPY ./certificate/nginx.key ./etc/nginx/certificate/nginx.key
