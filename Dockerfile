# Dockerfile
FROM node:22-alpine

# Declare build-time argument
ARG NEXT_PUBLIC_PYTHON_BACKEND_URL

# Expose the environment variable to the build and runtime environments
ENV NEXT_PUBLIC_PYTHON_BACKEND_URL=${NEXT_PUBLIC_PYTHON_BACKEND_URL}

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# This ensures that the env var is available during Next.js build
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
