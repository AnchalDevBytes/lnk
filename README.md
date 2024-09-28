# LNK: A Fullstack URL Shortener Application

LNK is a full-stack URL shortening application that allows users to create, share, and track shortened URLs. The application features a frontend for user interaction, a backend for API handling, and analytics tracking for each shortened URL.

## Features

- **URL Shortening:** Create short URLs for long links.
- **Redirection:** Automatically redirect users to the original URL when visiting the short link.
- **Analytics:** View detailed statistics for each shortened URL, including the number of clicks and visit history.
- **Copy to Clipboard:** Easily copy short URLs to the clipboard for sharing.

## Screenshots

![Homepage](/readmeAssets/lnkHomePage.png)

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, React, Axios, React-Toastify
- **Backend:** Hono.js, Prisma ORM, Cloudflare Workers
- **Database:** PostgreSQL with Prisma
- **Deployment:** Vercel (Frontend), Cloudflare (Backend)

## Installation and Setup

### Prerequisites

- Node.js (v20 or later)
- PostgreSQL

### Backend Setup

1. **Fork and then Clone the repository:**
   ```bash
    git clone https://github.com/AnchalDevBytes/lnk.git
    cd lnk
   ```

2. **Install dependencies: frontend & backend**
   ```bash
   cd lnk-backend
   npm install

   cd frontend
   npm install
   ```

3. **Set up the database:**
   - Create a PostgreSQL and a Prisma accelerate database URL and update the `DATABASE_URL` with prisma accelerate and `DIRECT_URL` with postgresql url, in the `.env` file of backend.
   - In the frontend `.env` just paste the backend server url example `http://localhost:8787`

4. **Run database migrations:**
   ```bash
   npx prisma migrate dev --name name_of_migration
   npx prisma generate --no-engine
   ```

5. **Start the backend server:**
   ```bash
   npm run dev
   ```
