# 🚀 Portfolio Site Deployment Guide

This guide explains how to deploy your portfolio site from Cursor to GitHub Pages using the automated deployment system.

## 📋 Prerequisites

Before using the deployment system, ensure you have:

- [ ] Git installed and configured
- [ ] GitHub account with repository access
- [ ] Repository cloned locally
- [ ] GitHub Pages enabled in repository settings

## 🔧 Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/muahuavang/My-Portfolio-Site
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Click **Save**

### 2. Verify GitHub Actions

The GitHub Actions workflow will automatically create the `gh-pages` branch when you first push to main. Check the **Actions** tab to see deployment status.

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

**GitHub Actions** automatically deploys your site whenever you push to the main branch.

```bash
# Make your changes in Cursor
# Then commit and push
git add .
git commit -m "Your commit message"
git push origin main
```

The site will automatically update within 5-10 minutes.

### Method 2: PowerShell Script (Windows)

Use the PowerShell script for a guided deployment experience:

```powershell
# Quick deploy with default message
.\deploy.ps1

# Deploy with custom commit message
.\deploy.ps1 -CommitMessage "Add new project section"

# Force deploy from any branch
.\deploy.ps1 -Force
```

### Method 3: Batch File (Windows)

Alternative to PowerShell for Windows users:

```cmd
# Quick deploy
deploy.bat
```

### Method 4: Bash Script (Cross-platform)

For Git Bash, WSL, or Unix-like systems:

```bash
# Make executable first time
chmod +x deploy.sh

# Quick deploy with default message
./deploy.sh

# Deploy with custom commit message
./deploy.sh -m "Add new project section"

# Force deploy from any branch
./deploy.sh -f
```

### Method 5: NPM Scripts

If you have Node.js installed:

```bash
# Install dependencies
npm install

# Quick deploy
npm run deploy

# Start local development server
npm start
```

### Method 6: Manual Git Commands

Standard git workflow:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## 📱 Testing Your Deployment

### Local Testing
1. Open `index.html` in your browser
2. Test all functionality
3. Check responsive design
4. Verify no console errors

### Live Site Testing
1. Wait 5-10 minutes after push
2. Visit: https://muahuavang.github.io/My-Portfolio-Site/
3. Test all features
4. Check mobile responsiveness

## 🔍 Troubleshooting

### Site Not Updating

1. **Check GitHub Actions**:
   - Go to Actions tab in repository
   - Look for recent workflow runs
   - Check for any errors

2. **Verify GitHub Pages**:
   - Go to Settings > Pages
   - Ensure source is set to gh-pages branch
   - Check if branch exists

3. **Wait for Propagation**:
   - Changes can take 5-10 minutes
   - Clear browser cache
   - Try incognito/private browsing

### Deployment Script Errors

1. **Git Not Found**:
   - Install Git from https://git-scm.com/
   - Add Git to PATH environment variable

2. **Repository Issues**:
   - Ensure you're in the correct directory
   - Check if `.git` folder exists
   - Verify remote origin is set correctly

3. **Permission Errors**:
   - Check file permissions
   - Run as administrator if needed
   - Ensure scripts are executable

### Common Git Issues

1. **Merge Conflicts**:
   ```bash
   git pull origin main
   # Resolve conflicts manually
   git add .
   git commit -m "Resolve merge conflicts"
   git push origin main
   ```

2. **Branch Issues**:
   ```bash
   # Switch to main branch
   git checkout main
   
   # Create and switch to new branch
   git checkout -b feature-branch
   ```

## 📊 Deployment Workflow

### Daily Development Workflow

1. **Make Changes**: Edit files in Cursor
2. **Test Locally**: Open index.html in browser
3. **Commit Changes**: Use deployment script or git commands
4. **Push to GitHub**: Automatically triggers deployment
5. **Verify Deployment**: Check Actions tab and live site

### Feature Development Workflow

1. **Create Feature Branch**:
   ```bash
   git checkout -b feature-name
   ```

2. **Make Changes**: Develop your feature
3. **Test Thoroughly**: Ensure everything works
4. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Add feature description"
   git push origin feature-name
   ```

5. **Create Pull Request**: Merge to main branch
6. **Automatic Deployment**: Site updates after merge

## 🎯 Best Practices

### Before Deploying

- [ ] Test all functionality locally
- [ ] Check responsive design
- [ ] Validate HTML/CSS/JavaScript
- [ ] Optimize images
- [ ] Review content for typos

### Commit Messages

Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add new project: E-commerce website"
git commit -m "Update contact form validation"
git commit -m "Fix mobile navigation menu"

# Avoid
git commit -m "Update"
git commit -m "Fix stuff"
git commit -m "Changes"
```

### File Organization

- Keep related files together
- Use consistent naming conventions
- Organize CSS with comments
- Structure JavaScript logically
- Maintain clean HTML hierarchy

## 🔒 Security Considerations

- Never commit sensitive information
- Use HTTPS for all external links
- Validate user inputs in forms
- Keep dependencies updated
- Follow OWASP security guidelines

## 📞 Support

If you encounter issues:

1. **Check GitHub Issues**: Look for similar problems
2. **Review GitHub Actions**: Check deployment logs
3. **Verify Configuration**: Ensure all settings are correct
4. **Test Locally**: Verify changes work before deploying

## 🎉 Success Indicators

Your deployment is successful when:

- ✅ GitHub Actions workflow completes without errors
- ✅ gh-pages branch is updated
- ✅ Live site reflects your changes
- ✅ All functionality works correctly
- ✅ Site loads without errors

---

**Happy Deploying! 🚀**

Your portfolio site will be live at: https://muahuavang.github.io/My-Portfolio-Site/
