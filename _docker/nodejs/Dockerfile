FROM node:22

# Install dependencies
RUN apt-get update && apt-get install -y \
    vim \
    zip \
    unzip \
    curl

# Change current user
USER node

EXPOSE 5173

# https://github.com/vitejs/vite/discussions/3396
# Прод
CMD ["sh", "-c", "npm install && npm run build"]
# Разработка
# CMD ["sh", "-c", "npm install && npm run dev -- --host"]
