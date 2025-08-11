# 🚀 Portfolio Site Deployment Guide

## 📋 Overview

This guide explains how to deploy your portfolio site from Cursor to GitHub Pages using the automated deployment system. The system follows industry best practices for code quality, security, and maintainability.

## 🎯 Prerequisites

Before using the deployment system, ensure you have:

- [ ] **Git** installed and configured with your credentials
- [ ] **GitHub account** with repository access
- [ ] **Repository cloned** locally to your development machine
- [ ] **GitHub Pages enabled** in repository settings
- [ ] **Node.js** (optional, for development tools)

## 🔧 Initial Setup

### 1. Enable GitHub Pages

1. Navigate to your repository: [https://github.com/muahuavang/My-Portfolio-Site](https://github.com/muahuavang/My-Portfolio-Site)
2. Click the **Settings** tab
3. Scroll down to the **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch (will be created automatically)
6. Click **Save**

### 2. Verify GitHub Actions

The GitHub Actions workflow automatically creates the `gh-pages` branch on your first push to main. Check the **Actions** tab to monitor deployment status.

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

**GitHub Actions** automatically deploys your site whenever you push to the main branch.

```bash
# Make your changes in Cursor
# Then commit and push
git add .
git commit -m "feat(portfolio): add new project section"
git push origin main
```

**Result**: Site automatically updates within 5-10 minutes.

### Method 2: PowerShell Script (Windows)

Use the PowerShell script for a guided deployment experience:

```powershell
# Quick deploy with default message
.\deploy.ps1

# Deploy with custom commit message
.\deploy.ps1 -CommitMessage "feat(contact): improve form validation"

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
./deploy.sh -m "fix(navigation): resolve mobile menu issue"

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

# Run code quality checks
npm run lint
npm run validate
```

### Method 6: Manual Git Commands

Standard git workflow following conventional commit format:

```bash
git add .
git commit -m "type(scope): description"
git push origin main
```

**Conventional Commit Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 📱 Testing Your Deployment

### Local Testing

1. **Open `index.html`** in your browser
2. **Test all functionality** (theme toggle, navigation, forms)
3. **Check responsive design** on different screen sizes
4. **Verify no console errors** in browser developer tools
5. **Test accessibility** with keyboard navigation

### Live Site Testing

1. **Wait 5-10 minutes** after push for deployment
2. **Visit**: [https://muahuavang.github.io/My-Portfolio-Site/](https://muahuavang.github.io/My-Portfolio-Site/)
3. **Test all features** and interactions
4. **Check mobile responsiveness** on various devices
5. **Verify performance** using browser dev tools

## 🔍 Troubleshooting

### Site Not Updating

1. **Check GitHub Actions**:
   - Go to Actions tab in repository
   - Look for recent workflow runs
   - Check for any errors or failures

2. **Verify GitHub Pages**:
   - Go to Settings > Pages
   - Ensure source is set to gh-pages branch
   - Check if branch exists and has content

3. **Wait for Propagation**:
   - Changes can take 5-10 minutes
   - Clear browser cache
   - Try incognito/private browsing

### Deployment Script Errors

1. **Git Not Found**:
   - Install Git from [https://git-scm.com/](https://git-scm.com/)
   - Add Git to PATH environment variable
   - Restart terminal/command prompt

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
   git commit -m "fix(merge): resolve conflicts"
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

1. **Make Changes**: Edit files in Cursor following coding standards
2. **Test Locally**: Open index.html in browser and verify functionality
3. **Commit Changes**: Use deployment script or git commands with conventional commits
4. **Push to GitHub**: Automatically triggers GitHub Actions deployment
5. **Verify Deployment**: Check Actions tab and live site

### Feature Development Workflow

1. **Create Feature Branch**:
   ```bash
   git checkout -b feat/new-project-section
   ```

2. **Make Changes**: Develop your feature following coding standards
3. **Test Thoroughly**: Ensure everything works as expected
4. **Commit and Push**:
   ```bash
   git add .
   git commit -m "feat(projects): add new project showcase section"
   git push origin feat/new-project-section
   ```

5. **Create Pull Request**: Merge to main branch
6. **Automatic Deployment**: Site updates after merge

## 🎯 Best Practices

### Before Deploying

- [ ] **Test all functionality** locally
- [ ] **Check responsive design** on multiple screen sizes
- [ ] **Validate HTML/CSS/JavaScript** using linting tools
- [ ] **Optimize images** for web (compress, use appropriate formats)
- [ ] **Review content** for typos and accuracy
- [ ] **Run code quality checks**: `npm run lint && npm run validate`

### Commit Messages

Use clear, descriptive commit messages following conventional format:

```bash
# Good examples
git commit -m "feat(projects): add new e-commerce website project"
git commit -m "fix(contact): resolve form validation error"
git commit -m "style(navigation): improve mobile menu animations"
git commit -m "docs(readme): update deployment instructions"

# Avoid
git commit -m "Update"
git commit -m "Fix stuff"
git commit -m "Changes"
```

### Code Quality Standards

- **Follow naming conventions**: camelCase for variables/functions, PascalCase for classes
- **Keep functions single-responsibility**: Each function should do one thing well
- **Implement proper error handling**: Use try-catch blocks and meaningful error messages
- **Validate user inputs**: Sanitize and validate all form data
- **Use semantic HTML**: Maintain proper heading hierarchy and accessibility
- **Optimize performance**: Use efficient DOM manipulation and lazy loading

## 🔒 Security Considerations

- **Never commit sensitive information** (passwords, API keys, personal data)
- **Use HTTPS** for all external links
- **Validate user inputs** in forms to prevent XSS attacks
- **Keep dependencies updated** to avoid security vulnerabilities
- **Follow OWASP security guidelines** for web applications

## 📞 Support & Resources

If you encounter issues:

1. **Check GitHub Issues**: Look for similar problems in the repository
2. **Review GitHub Actions**: Check deployment logs for error details
3. **Verify Configuration**: Ensure all settings are correct
4. **Test Locally**: Verify changes work before deploying

**Useful Resources**:
- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Web Development Best Practices](https://web.dev/learn/)

## 🎉 Success Indicators

Your deployment is successful when:

- ✅ **GitHub Actions workflow** completes without errors
- ✅ **gh-pages branch** is updated with latest content
- ✅ **Live site** reflects your changes
- ✅ **All functionality** works correctly
- ✅ **Site loads** without errors or console warnings
- ✅ **Performance** meets acceptable standards

## 🔄 Continuous Improvement

- **Monitor site performance** using browser dev tools
- **Gather user feedback** and implement improvements
- **Keep dependencies updated** for security and performance
- **Follow web standards** and accessibility guidelines
- **Test on multiple devices** and browsers regularly

---

**Happy Deploying! 🚀**

Your portfolio site will be live at: [https://muahuavang.github.io/My-Portfolio-Site/](https://muahuavang.github.io/My-Portfolio-Site/)

**Remember**: Quality code leads to quality deployments. Always follow the coding standards and test thoroughly before deploying.
