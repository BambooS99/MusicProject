# TODO

## Auth
- [ ] Add login system (username/password + JWTs)
- [ ] Implement session management
- [ ] Add protected routes

## Database
- [ ] Replace `albums.json` with PostgreSQL
- [ ] Design schema and run migrations

## Deployment
- [ ] Set up VPS
- [ ] Configure nginx
- [ ] Run server with pm2
- [ ] Point domain at it

## CI/CD
- [ ] Add GitHub Actions workflow (lint + build on push)

## Testing
- [ ] Write integration tests for Express routes (Vitest or Jest)

## User-submitted reviews
- [ ] Auth-gated submission form
- [ ] Server-side validation
- [ ] Write endpoint + database insert

---

Start with auth and database; everything else follows from having real data and real users.