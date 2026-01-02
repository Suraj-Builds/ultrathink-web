# Deploy UltraThin-K Website to GitLab Pages

## Step-by-Step Deployment Guide

### Step 1: Create a GitLab Repository
1. Go to [gitlab.com](https://gitlab.com)
2. Sign in or create an account
3. Click **New project** → **Create blank project**
4. Name it: `ultrathink-web` (or your preferred name)
5. Set visibility to **Public** (required for free GitLab Pages)
6. Click **Create project**

---

### Step 2: Push Your Code to GitLab

#### Option A: If you have Git configured locally
```bash
cd /home/ubuntu/ultrathink-web

# Add GitLab as remote (replace YOUR_USERNAME and PROJECT_NAME)
git remote add gitlab https://gitlab.com/YOUR_USERNAME/ultrathink-web.git

# Push to GitLab
git branch -M main
git push -u gitlab main
```

#### Option B: Upload files directly
1. In GitLab, click **+** → **Upload file**
2. Upload all files from your downloaded ZIP
3. Commit with message: "Initial commit"

---

### Step 3: Automatic Deployment
The `.gitlab-ci.yml` file is already configured. GitLab will automatically:

1. **Build** your React app
2. **Deploy** to GitLab Pages
3. Make it live at: `https://YOUR_USERNAME.gitlab.io/ultrathink-web`

**Check deployment status:**
- Go to your GitLab project
- Click **Deployments** → **Environments** (left sidebar)
- You'll see the build progress and deployment status

---

### Step 4: Custom Domain (Optional)
To use your own domain (e.g., ultrathin-k.in):

1. Go to **Settings** → **Pages** (left sidebar)
2. Click **New domain**
3. Enter your domain: `ultrathin-k.in`
4. Add the DNS records shown (CNAME or A records)
5. Wait for verification (usually 5-30 minutes)

---

### Step 5: Verify Deployment
- **Default GitLab URL:** `https://YOUR_USERNAME.gitlab.io/ultrathink-web`
- **Custom domain:** `https://ultrathin-k.in` (after DNS setup)

---

## Troubleshooting

### Build fails with "pnpm not found"
The `.gitlab-ci.yml` installs pnpm automatically. If it fails:
- Check **CI/CD** → **Pipelines** for error logs
- Ensure `package.json` exists in root directory

### Site shows 404 or blank page
- Verify the build completed successfully (check Pipelines)
- Ensure `dist/` folder was created
- Check that `public/` artifacts were deployed

### Need to rebuild?
Push a new commit to trigger automatic rebuild:
```bash
git add .
git commit -m "Update website"
git push gitlab main
```

---

## Updating Your Website

Every time you push changes to GitLab:
1. GitLab automatically runs the build
2. Tests and builds your React app
3. Deploys to Pages automatically
4. Your site updates within 1-2 minutes

**No manual deployment needed!**

---

## File Structure Reference
```
ultrathink-web/
├── client/
│   ├── src/
│   │   ├── pages/Home.tsx
│   │   ├── components/
│   │   └── index.css
│   ├── public/
│   │   └── images/
│   └── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── .gitlab-ci.yml  ← CI/CD configuration
```

---

## Support
- GitLab Pages Docs: https://docs.gitlab.com/ee/user/project/pages/
- Vite Build Guide: https://vitejs.dev/guide/build.html
