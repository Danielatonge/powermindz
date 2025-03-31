FROM public.ecr.aws/docker/library/node:20.16.0 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM public.ecr.aws/nginx/nginx:1.21.3-alpine

COPY --from=builder /app/.output/public /usr/share/nginx/html

COPY conf/stage/nginx.conf /etc/nginx/nginx.conf

# COPY conf/stage/.auth /etc/nginx/.auth

RUN apk add --no-cache nodejs npm

COPY --from=builder /app /app

EXPOSE 3000 8000

CMD ["sh", "-c", "nginx && node /app/.output/server/index.mjs"]
