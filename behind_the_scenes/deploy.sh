#!/bin/bash

# Portfolio Deployment Script
# This script automates the deployment process from Cursor to GitHub

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Default values
COMMIT_MESSAGE="Update portfolio site"
FORCE=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -m|--message)
            COMMIT_MESSAGE="$2"
            shift 2
            ;;
        -f|--force)
            FORCE=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo "Options:"
            echo "  -m, --message TEXT    Commit message (default: 'Update portfolio site')"
            echo "  -f, --force          Force deployment even if not on main branch"
            echo "  -h, --help           Show this help message"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

echo -e "${GREEN}🚀 Portfolio Deployment Script${NC}"
echo -e "${GREEN}================================${NC}"

# Check if git is available
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not available. Please install Git first.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Git is available${NC}"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Not in a git repository. Please run this script from your project directory.${NC}"
    exit 1
fi

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo -e "${YELLOW}📍 Current branch: $CURRENT_BRANCH${NC}"

if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    echo -e "${YELLOW}⚠️  Warning: You're not on the main branch. Consider switching to main for deployment.${NC}"
    if [ "$FORCE" = false ]; then
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 0
        fi
    fi
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}📝 Uncommitted changes detected:${NC}"
    git status --porcelain | sed 's/^/  /'
    
    read -p "Would you like to commit these changes? (Y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Nn]$ ]]; then
        # Add all changes
        echo -e "${BLUE}➕ Adding all changes...${NC}"
        git add .
        
        # Commit changes
        echo -e "${BLUE}💾 Committing changes...${NC}"
        git commit -m "$COMMIT_MESSAGE"
    fi
else
    echo -e "${GREEN}✅ No uncommitted changes${NC}"
fi

# Check if remote origin exists
if ! git remote get-url origin &> /dev/null; then
    echo -e "${RED}❌ No remote origin found. Please add your GitHub repository as origin.${NC}"
    echo -e "${YELLOW}Run: git remote add origin https://github.com/muahuavang/My-Portfolio-Site.git${NC}"
    exit 1
fi

REMOTE_URL=$(git remote get-url origin)
echo -e "${CYAN}🌐 Remote origin: $REMOTE_URL${NC}"

# Pull latest changes
echo -e "${BLUE}⬇️  Pulling latest changes...${NC}"
if git pull origin "$CURRENT_BRANCH"; then
    echo -e "${GREEN}✅ Pull successful${NC}"
else
    echo -e "${YELLOW}⚠️  Pull failed, but continuing...${NC}"
fi

# Push to GitHub
echo -e "${BLUE}⬆️  Pushing to GitHub...${NC}"
if git push origin "$CURRENT_BRANCH"; then
    echo -e "${GREEN}✅ Push successful${NC}"
else
    echo -e "${RED}❌ Push failed${NC}"
    exit 1
fi

# Check if GitHub Pages is enabled
echo -e "${BLUE}🔍 Checking GitHub Pages status...${NC}"
echo -e "${CYAN}📖 If GitHub Pages is enabled, your site will be available at:${NC}"
echo -e "${WHITE}   https://muahuavang.github.io/My-Portfolio-Site/${NC}"
echo
echo -e "${YELLOW}📋 To enable GitHub Pages:${NC}"
echo -e "${WHITE}   1. Go to your repository on GitHub${NC}"
echo -e "${WHITE}   2. Click Settings > Pages${NC}"
echo -e "${WHITE}   3. Select 'Deploy from a branch'${NC}"
echo -e "${WHITE}   4. Choose 'gh-pages' branch (created by GitHub Actions)${NC}"
echo -e "${WHITE}   5. Click Save${NC}"

echo
echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${CYAN}⏱️  Your site will be updated within a few minutes.${NC}"
