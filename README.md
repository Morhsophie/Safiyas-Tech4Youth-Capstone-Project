# Tech4Youth Capstone

The repository root contains the React/Vite frontend. The Express/Mongoose API is in `Backend`.

## Local development

1. Copy `Backend/.env.example` to `Backend/.env`. Set `MONGO_URI` to the Atlas connection string, including the `tech4youth` database path. Use a database user from Atlas **Database Access**, URL-encode special characters in its password, and set a private `JWT_SECRET` of at least 32 characters. Keep `.env` private.
2. In one terminal, run `npm install` and `npm run dev` from `Backend`.
3. In a second terminal, run `npm install` and `npm run dev` from the repository root.

The Vite development server proxies `/api` requests to `http://127.0.0.1:5000`. Registration saves users in MongoDB, and login verifies the saved password hash.

## Render deployment

- Deploy `Backend` as a Node web service with build command `npm install` and start command `npm start`. Set private `MONGO_URI`, `JWT_SECRET`, and `FRONTEND_URL` environment variables.
- Deploy the repository root as a static site with build command `npm install && npm run build` and publish directory `dist`. Set `VITE_API_URL` to the backend's public origin at build time.
- Never put MongoDB credentials in a `VITE_` variable; Vite includes those values in browser code.
