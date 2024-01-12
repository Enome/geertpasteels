FROM lipanski/docker-static-website:latest

COPY out .

CMD ["/busybox", "httpd", "-f", "-v", "-p", "80", "-c", "httpd.conf"]
