FROM public.ecr.aws/nginx/nginx:1.21.3-alpine

COPY conf/dev/nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /etc/nginx/html
RUN echo "<html><body><center><h1>Coming Soon</h1></center></body></html>" > /etc/nginx/html/index.html
# Add additional pages here