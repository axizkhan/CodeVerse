# FROM node:22-alpine AS builder

# WORKDIR /app

# COPY package*.json ./

# RUN --mount=type=cache,target=/root/.npm npm ci

# COPY . .

# RUN npm run build

# FROM node:22 AS runner

# ENV NODE_ENV=production

# WORKDIR /app

# COPY --link --from=builder /app/dist ./dist

# RUN --mount=type=cache,traget=/root/.npm npm install serve@^14.2.6 --omit=dev

# USER node

# EXPOSE 3000

# CMD ["npx","server","-s","dist","-l","3000"]

FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]