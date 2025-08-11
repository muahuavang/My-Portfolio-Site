@echo off
REM Portfolio Deployment Script for Windows (Batch Version)
REM This script automates the deployment process from Cursor to GitHub

setlocal enabledelayedexpansion

echo 🚀 Portfolio Deployment Script
echo ================================

REM Check if git is available
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not available. Please install Git first.
    pause
    exit /b 1
)
echo ✅ Git is available

REM Check if we're in a git repository
if not exist ".git" (
    echo ❌ Not in a git repository. Please run this script from your project directory.
    pause
    exit /b 1
)

REM Check current branch
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i
echo 📍 Current branch: !CURRENT_BRANCH!

if not "!CURRENT_BRANCH!"=="main" if not "!CURRENT_BRANCH!"=="master" (
    echo ⚠️  Warning: You're not on the main branch. Consider switching to main for deployment.
    set /p CONTINUE="Continue anyway? (y/N): "
    if /i not "!CONTINUE!"=="y" (
        echo Deployment cancelled.
        pause
        exit /b 0
    )
)

REM Check for uncommitted changes
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    echo 📝 Uncommitted changes detected:
    git status --porcelain
    
    set /p COMMIT_CHANGES="Would you like to commit these changes? (Y/n): "
    if /i not "!COMMIT_CHANGES!"=="n" (
        REM Add all changes
        echo ➕ Adding all changes...
        git add .
        
        REM Commit changes
        echo 💾 Committing changes...
        git commit -m "Update portfolio site"
    )
) else (
    echo ✅ No uncommitted changes
)

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ No remote origin found. Please add your GitHub repository as origin.
    echo Run: git remote add origin https://github.com/muahuavang/My-Portfolio-Site.git
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('git remote get-url origin') do set REMOTE_URL=%%i
echo 🌐 Remote origin: !REMOTE_URL!

REM Pull latest changes
echo ⬇️  Pulling latest changes...
git pull origin "!CURRENT_BRANCH!"
if %errorlevel% equ 0 (
    echo ✅ Pull successful
) else (
    echo ⚠️  Pull failed, but continuing...
)

REM Push to GitHub
echo ⬆️  Pushing to GitHub...
git push origin "!CURRENT_BRANCH!"
if %errorlevel% neq 0 (
    echo ❌ Push failed
    pause
    exit /b 1
)
echo ✅ Push successful

REM Check if GitHub Pages is enabled
echo 🔍 Checking GitHub Pages status...
echo 📖 If GitHub Pages is enabled, your site will be available at:
echo    https://muahuavang.github.io/My-Portfolio-Site/
echo.
echo 📋 To enable GitHub Pages:
echo    1. Go to your repository on GitHub
echo    2. Click Settings ^> Pages
echo    3. Select 'Deploy from a branch'
echo    4. Choose 'gh-pages' branch (created by GitHub Actions)
echo    5. Click Save

echo.
echo 🎉 Deployment completed successfully!
echo ⏱️  Your site will be updated within a few minutes.

pause
