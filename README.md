# OpenShip.io

Launch Your Dream. Not Your Budget.

The open, affordable platform for the next generation of builders. Ship your startup, get discovered by thousands.

## Features

- 🚀 Free product listings
- ⬆️ Community-driven upvoting
- ✅ Verified product badges
- 📊 Product analytics
- 🎨 Modern, responsive design

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** PostgreSQL with Prisma ORM
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL

# Run database migrations
npx prisma migrate dev

# Seed the database
npm run db:seed

# Start development server
npm run dev
```

## Dokploy Deployment

### Option 1: Docker Compose (Recommended)

1. Create a new application in Dokploy
2. Select "Docker Compose" as the deployment method
3. Connect your Git repository
4. Dokploy will automatically use the `docker-compose.yml` file

### Option 2: Dockerfile Only

1. Create a new application in Dokploy
2. Select "Dockerfile" as the deployment method
3. Connect your Git repository
4. Add a PostgreSQL database in Dokploy
5. Set the environment variable:
   ```
   DATABASE_URL=postgresql://user:password@host:5432/dbname?schema=public
   ```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_URL` | Your app URL (for auth) | Optional |
| `NEXTAUTH_SECRET` | Secret key for NextAuth | Optional |

### Post-Deployment

After the first deployment, run migrations:

```bash
# In Dokploy terminal or via SSH
npx prisma migrate deploy

# Optionally seed the database
npm run db:seed
```

## Project Structure

```
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Seed data
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   └── lib/             # Utilities
├── Dockerfile           # Production Docker image
├── docker-compose.yml   # Local/Dokploy compose
└── scripts/
    └── start.sh         # Startup script
```

## License

MIT
