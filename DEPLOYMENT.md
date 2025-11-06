# 🚀 Deployment Guide for GitHub Pages

## Step-by-Step Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** button in the top right and select **New repository**
3. Name it `paul-page` (or any name you prefer)
4. Make it **Public**
5. Don't initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### 2. Update Configuration

Before pushing, update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: "https://YOUR-GITHUB-USERNAME.github.io",
  base: "/paul-page", // Use your repository name here
  // ... rest of config
});
```

Replace:
- `YOUR-GITHUB-USERNAME` with your actual GitHub username
- `/paul-page` with `/YOUR-REPO-NAME` if you used a different name

### 3. Initialize Git and Push

Open a terminal in the `paul-page` folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Paul's legendary page"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The workflow will automatically run and deploy your site!

### 5. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the workflow running (yellow circle)
3. Wait for it to complete (green checkmark) - usually takes 1-2 minutes
4. Your site will be live at: `https://YOUR-USERNAME.github.io/paul-page/`

## 🔄 Making Updates

After the initial deployment, any time you want to update the site:

```bash
# Make your changes to the files
# Then commit and push:
git add .
git commit -m "Updated content"
git push
```

The site will automatically redeploy! 🎉

## 🐛 Troubleshooting

### Site shows 404
- Make sure the `base` in `astro.config.mjs` matches your repository name exactly
- Check that GitHub Pages is enabled and set to "GitHub Actions"

### Styles not loading
- Verify the `site` URL in `astro.config.mjs` matches your GitHub Pages URL
- Check the browser console for any 404 errors

### Workflow fails
- Check the Actions tab for error messages
- Make sure all dependencies in `package.json` are correct
- Try running `npm install` and `npm run build` locally first

## 📞 Need Help?

If you run into issues:
1. Check the GitHub Actions logs in the Actions tab
2. Make sure Node.js 20+ is available (the workflow uses it)
3. Verify all files were committed and pushed to GitHub

---

**Viel Erfolg! 🏆**

