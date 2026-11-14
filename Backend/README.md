# Backend

## Local development

1. Copy `.env.example` to `.env`. Set `MONGO_URI` to the connection string from MongoDB Atlas **Connect → Drivers**. Use a database user from **Security → Database Access**, include the database name in the URI, and URL-encode special characters in its password. Set `JWT_SECRET` to a private random value of at least 32 characters. Keep `.env` private.
2. Run `npm install` and `npm run dev` from this directory.
3. Run `npm install` and `npm run dev` from the repository root in a second terminal.

The Vite development server proxies `/api` requests to `http://127.0.0.1:5000`. Registration saves users in MongoDB, and login verifies the saved password hash.

For deployment, run this directory as a Node web service and configure `MONGO_URI`, `JWT_SECRET`, and `FRONTEND_URL` in its private environment settings. Configure the root static frontend's `VITE_API_URL` as the backend's public origin at build time. Never put MongoDB credentials in a `VITE_` variable; Vite includes those values in browser code.
