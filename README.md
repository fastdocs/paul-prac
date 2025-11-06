# Paul's Page 🏆

A standalone page showcasing Paul Höfflin - Der unbesiegbare Fortnite-Gott!

## 🚀 Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📦 Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a new repository on GitHub (e.g., `paul-page`)

2. Update `astro.config.mjs`:
   - Change `site` to `https://YOUR-USERNAME.github.io`
   - Change `base` to `/YOUR-REPO-NAME` (e.g., `/paul-page`)

3. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

4. Create `.github/workflows/deploy.yml` in your repository:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Go to your repository settings on GitHub:
   - Navigate to **Settings > Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source

6. Push the workflow file, and your site will automatically deploy!

### Option 2: Manual Deploy

1. Build the project:
```bash
npm run build
```

2. Install `gh-pages` package:
```bash
npm install -g gh-pages
```

3. Deploy:
```bash
gh-pages -d dist
```

## 🛠️ Tech Stack

- **Astro 5** - Static site generator
- **Tailwind CSS v4** - Styling
- **tailwindcss-animated** - Animations

## 📝 Customization

- Edit `src/pages/index.astro` to modify the content
- Edit `src/styles/globals.css` to change global styles
- Replace `/public/images/paul.jpeg` with your own image

## 📄 License

This is a personal project. Feel free to use it as inspiration! 🎮

