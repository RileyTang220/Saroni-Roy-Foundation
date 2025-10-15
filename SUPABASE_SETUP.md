# Supabase Guide

## 1. Project

project information:

Organization: SRF Global
Project Name: SuperNaariWebsite
Database Password: SuperNaariWebsite123

## 2. Table

In Supabase Dashboard:

1. tablename: user_subscribes
2. columns:

| Column Name | Type | Settings |
|-------------|------|----------|
| `id` | `int8` | Primary Key, Auto-increment |
| `first_name` | `text` | Not null |
| `last_name` | `text` | Not null |
| `email` | `text` | Not null, Unique |
| `created_at` | `timestamptz` | Default: `now()` |


## 3. Test Configuration

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Visit the website and try submitting the form

## Production Deployment

When deploying to production:

1. Set environment variables in your deployment platform (e.g., Vercel, Netlify)
2. Ensure `.env.local` file is not committed to Git
3. Consider using `service_role` key for server-side operations (if needed)

## Free Tier Limits

Supabase free plan includes:

- 500MB database storage
- 2GB bandwidth
- 50,000 monthly active users
- Unlimited API requests

For newsletter subscriptions, this free tier is usually sufficient.
