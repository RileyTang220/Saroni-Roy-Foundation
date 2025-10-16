# Environment Variables Setup for Team Development

## 🔒 Security & Team Collaboration

### How it works:
- `.env.local` files are **local only** and **never committed to Git**
- Each developer needs to create their own `.env.local` file
- Other team members **cannot see** your environment variables
- This ensures security and allows different configurations per developer

## 📋 Setup Instructions for Team Members

### 1. Create your local environment file
```bash
# In the project root directory
cp .env.example .env.local
```

### 2. Get Supabase credentials
1. Go to [https://supabase.com](https://supabase.com)
2. Log in to your account
3. Select the project: **SuperNaariWebsite**
4. Go to **Settings > API**
5. Copy the following values:
   - **Project URL**: `https://nltbcjqbnkvwpvseggan.supabase.co`
   - **anon public key**: (the long string starting with `eyJ...`)

### 3. Update your `.env.local` file
```bash
# Replace the placeholder values with your actual credentials
VITE_SUPABASE_URL=https://nltbcjqbnkvwpvseggan.supabase.co
VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
```

### 4. Verify setup
```bash
# Start the development server
npm run dev

# Test the newsletter form to ensure it works
```

## 🚨 Important Security Notes

### ✅ Safe to share:
- **Project URL** (already visible in code)
- **anon public key** (designed for frontend use)

### ❌ Never share:
- **service_role key** (server-side only)
- **Database password** (only for database access)

### 🔐 File Security:
- `.env.local` is in `.gitignore` - **never committed**
- Each developer has their own copy
- No sensitive data is exposed in the repository

## 🛠️ Troubleshooting

### If you get "Invalid API key" error:
1. Check if `.env.local` file exists
2. Verify the anon key is correct (starts with `eyJ`)
3. Restart the development server after changes

### If you get "relation does not exist" error:
1. Make sure the table `user_subscribes` exists in Supabase
2. Check if RLS (Row Level Security) is disabled for testing

## 📝 For Project Managers

### Database Access:
- **Table name**: `user_subscribes`
- **Organization**: SRF Global
- **Project**: SuperNaariWebsite
- **Password**: SuperNaariWebsite123

### Team Access:
- Each developer needs their own Supabase account
- They can be added to the organization for database access
- Or they can use the shared credentials above

## 🔄 Deployment

### Production Environment:
- Set environment variables in your deployment platform
- Use the same Supabase project credentials
- Never commit `.env.local` to production

### Platforms like Vercel/Netlify:
- Add environment variables in platform settings
- Use the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` values
