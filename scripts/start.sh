#!/bin/sh

echo "Running database migrations..."
npx prisma migrate deploy

echo "Starting the application..."
node server.js
