ARG DOMAIN_ARG
FROM node:lts
WORKDIR /app
COPY . /app
# ENV PORT 3000
# ENV HOST 0.0.0.0
ENV DOMAIN=${DOMAIN_ARG}
RUN yarn install && chmod +x /app/entrypoint.sh
CMD /app/entrypoint.sh