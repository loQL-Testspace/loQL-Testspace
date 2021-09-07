## Build layer
FROM node:16.0.0 AS builder 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:client

## Production layer
FROM alpine
WORKDIR /app
COPY --from=builder /app .
RUN apk add --update nodejs npm
RUN addgroup -S app && adduser -S prod -G app
USER prod
CMD ["npm", "run", "start:express"]
