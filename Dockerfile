FROM node:21.5.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:21.5.0
LABEL org.opencontainers.image.source https://github.com/alexispet/final-test-Louis-cardon
WORKDIR /app
COPY --from=builder /app /app
COPY entrypoint.sh /app/
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
EXPOSE 3000
CMD ["npm", "start"]
