# syntax=docker/dockerfile:1

FROM klakegg/hugo:ext-alpine AS builder

WORKDIR /src

COPY . .

ARG HUGO_BASEURL=/
ENV HUGO_BASEURL=${HUGO_BASEURL}

RUN hugo --minify --gc --baseURL "${HUGO_BASEURL}"

FROM nginx:1.27-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ \$uri/index.html =404;
    }

    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot|webp|webmanifest)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }
}
EOF

COPY --from=builder /src/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
