# Portfolio Deployment Script for Windows
# This script automates the deployment process from Cursor to GitHub

param(
    [string]$CommitMessage = "Update portfolio site",
    [switch]$Force
)

Write-Host "🚀 Portfolio Deployment Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Check if git is available
try {
    git --version | Out-Null
    Write-Host "✅ Git is available" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not available. Please install Git first." -ForegroundColor Red
    exit 1
}

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Not in a git repository. Please run this script from your project directory." -ForegroundColor Red
    exit 1
}

# Check current branch
$currentBranch = git branch --show-current
Write-Host "📍 Current branch: $currentBranch" -ForegroundColor Yellow

if ($currentBranch -ne "main" -and $currentBranch -ne "master") {
    Write-Host "⚠️  Warning: You're not on the main branch. Consider switching to main for deployment." -ForegroundColor Yellow
    if (-not $Force) {
        $response = Read-Host "Continue anyway? (y/N)"
        if ($response -ne "y" -and $response -ne "Y") {
            exit 0
        }
    }
}

# Check for uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Uncommitted changes detected:" -ForegroundColor Yellow
    Write-Host $status -ForegroundColor Gray
    
    $response = Read-Host "Would you like to commit these changes? (Y/n)"
    if ($response -ne "n" -and $response -ne "N") {
        # Add all changes
        Write-Host "➕ Adding all changes..." -ForegroundColor Blue
        git add .
        
        # Commit changes
        Write-Host "💾 Committing changes..." -ForegroundColor Blue
        git commit -m $CommitMessage
    }
} else {
    Write-Host "✅ No uncommitted changes" -ForegroundColor Green
}

# Check if remote origin exists
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "❌ No remote origin found. Please add your GitHub repository as origin." -ForegroundColor Red
    Write-Host "Run: git remote add origin https://github.com/muahuavang/My-Portfolio-Site.git" -ForegroundColor Yellow
    exit 1
}

Write-Host "🌐 Remote origin: $remote" -ForegroundColor Cyan

# Pull latest changes
Write-Host "⬇️  Pulling latest changes..." -ForegroundColor Blue
try {
    git pull origin $currentBranch
    Write-Host "✅ Pull successful" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Pull failed, but continuing..." -ForegroundColor Yellow
}

# Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Blue
try {
    git push origin $currentBranch
    Write-Host "✅ Push successful" -ForegroundColor Green
} catch {
    Write-Host "❌ Push failed" -ForegroundColor Red
    exit 1
}

# Check if GitHub Pages is enabled
Write-Host "🔍 Checking GitHub Pages status..." -ForegroundColor Blue
Write-Host "📖 If GitHub Pages is enabled, your site will be available at:" -ForegroundColor Cyan
Write-Host "   https://muahuavang.github.io/My-Portfolio-Site/" -ForegroundColor White
Write-Host ""
Write-Host "📋 To enable GitHub Pages:" -ForegroundColor Yellow
Write-Host "   1. Go to your repository on GitHub" -ForegroundColor White
Write-Host "   2. Click Settings > Pages" -ForegroundColor White
Write-Host "   3. Select 'Deploy from a branch'" -ForegroundColor White
Write-Host "   4. Choose 'gh-pages' branch (created by GitHub Actions)" -ForegroundColor White
Write-Host "   5. Click Save" -ForegroundColor White

Write-Host ""
Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
Write-Host "⏱️  Your site will be updated within a few minutes." -ForegroundColor Cyan
