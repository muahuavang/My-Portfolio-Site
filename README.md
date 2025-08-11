# 🚀 Muahua Ulysses Vang - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript following industry best practices. Features include light/dark mode toggle, mobile responsiveness, smooth animations, and automated deployment to GitHub Pages.

## 🌟 Features

### Design & User Experience

- **Responsive Design**: Mobile-first approach optimized for all devices
- **Light/Dark Mode**: Toggle between themes with system preference detection
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Modern UI**: Clean, professional design with consistent spacing and typography
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support

### Functionality

- **Theme Persistence**: Remembers user's theme preference using localStorage
- **Floating Contact Button**: Appears when scrolling and follows the user
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Contact Form**: Functional contact form with comprehensive validation
- **Mobile Menu**: Responsive hamburger menu for mobile devices

### Technical Features

- **CSS Variables**: Dynamic theming with CSS custom properties
- **Intersection Observer**: Performance-optimized animations
- **Throttled Scroll Events**: Optimized scroll handling
- **Error Handling**: Comprehensive error handling with user feedback
- **Code Quality**: Linting, formatting, and validation tools

## 🏗️ Architecture

### File Structure

```
portfolio/
├── index.html              # Main HTML structure
├── styles.css              # CSS styles and responsive design
├── script.js               # JavaScript functionality
├── .cursorrules            # Cursor development rules
├── .github/                # GitHub Actions workflow
├── package.json            # NPM configuration and scripts
├── deploy.ps1             # PowerShell deployment script
├── deploy.sh              # Bash deployment script
├── deploy.bat             # Windows batch deployment script
├── DEPLOYMENT.md          # Comprehensive deployment guide
└── README.md              # This file
```

### Code Organization

- **Modular JavaScript**: Functions organized by responsibility
- **CSS Architecture**: BEM-like methodology with CSS variables
- **Semantic HTML**: Proper heading hierarchy and accessibility
- **Error Handling**: Try-catch blocks with meaningful error messages
- **Performance**: Optimized animations and efficient DOM manipulation

## 🚀 Getting Started

### Prerequisites

- Git installed and configured
- GitHub account with repository access
- Modern web browser for testing
- Node.js (optional, for development tools)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/muahuavang/My-Portfolio-Site.git
   cd My-Portfolio-Site
   ```

2. **Install dependencies** (optional):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   # or open index.html directly in your browser
   ```

## 🔧 Development

### Code Quality Standards

This project follows strict coding standards:

- **Naming Conventions**: camelCase for variables/functions, PascalCase for classes
- **Function Design**: Single responsibility principle with early returns
- **Error Handling**: Comprehensive try-catch blocks and user feedback
- **Documentation**: JSDoc comments for all functions and methods
- **Performance**: Optimized animations and efficient DOM manipulation

### Available Scripts

```bash
# Development
npm start              # Start local development server
npm run dev            # Alternative development server

# Code Quality
npm run lint           # Run all linters
npm run lint:html      # HTML validation
npm run lint:css       # CSS validation
npm run lint:js        # JavaScript linting
npm run validate       # Run all validators
npm run format         # Format code with Prettier

# Deployment
npm run deploy         # Quick deployment
npm run deploy:custom  # Custom commit message deployment

# Maintenance
npm run audit          # Security audit
npm run clean          # Clean dependencies
npm run reinstall      # Reinstall dependencies
```

### Development Workflow

1. **Make Changes**: Edit files following coding standards
2. **Test Locally**: Verify functionality in browser
3. **Run Quality Checks**: `npm run lint && npm run validate`
4. **Commit Changes**: Use conventional commit format
5. **Deploy**: Push to trigger automatic deployment

## 🚀 Deployment

### Automatic Deployment

The project uses GitHub Actions for automatic deployment:

- **Trigger**: Any push to main branch
- **Result**: Site automatically deploys to GitHub Pages
- **URL**: https://muahuavang.github.io/My-Portfolio-Site/

### Manual Deployment

Multiple deployment options available:

- **PowerShell**: `.\deploy.ps1`
- **Bash**: `./deploy.sh`
- **Batch**: `deploy.bat`
- **NPM**: `npm run deploy`

### Deployment Checklist

Before deploying, ensure:

- [ ] All functionality tested locally
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Code quality checks pass
- [ ] No sensitive data exposed

## 🎨 Customization

### Personal Information

Update the following in `index.html`:

- **Name**: Replace "Muahua Ulysses Vang"
- **Location**: Update "Madison, WI"
- **Title**: Modify "Software Developer & Creative Technologist"
- **About**: Personal introduction and experience
- **Projects**: Your actual projects with descriptions
- **Skills**: Technologies and competencies
- **Contact**: Real contact information

### Styling

Modify `styles.css` to customize:

- **Colors**: Update CSS variables in `:root` and `.dark-mode`
- **Typography**: Change font imports and sizes
- **Layout**: Adjust grid layouts and spacing
- **Animations**: Modify transition durations and effects

### Functionality

Edit `script.js` to customize:

- **Theme Colors**: Update color scheme variables
- **Animations**: Modify scroll-triggered animations
- **Form Handling**: Replace contact form submission logic
- **Validation**: Adjust form validation rules

## 📱 Responsive Design

### Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

### Mobile-First Approach

- CSS written for mobile devices first
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized performance for mobile

## 🌙 Theme System

### Light/Dark Mode

- **Automatic Detection**: Detects system preference on first visit
- **Manual Toggle**: Sun/moon icon in top-right corner
- **Persistence**: Remembers user's choice across sessions
- **Smooth Transitions**: All elements transition smoothly

### CSS Variables

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #212529;
  --accent-primary: #007bff;
  /* ... more variables */
}

.dark-mode {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  --accent-primary: #4dabf7;
  /* ... dark theme variables */
}
```

## 🔒 Security Features

- **Input Validation**: Comprehensive form validation
- **XSS Prevention**: Sanitized user inputs
- **Secure Links**: External links use `rel="noopener noreferrer"`
- **No Sensitive Data**: No hardcoded credentials or API keys

## 🧪 Testing

### Testing Checklist

- [ ] **Desktop Browsers**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile Devices**: iOS Safari, Android Chrome
- [ ] **Responsive Design**: All breakpoints tested
- [ ] **Accessibility**: Keyboard navigation, screen readers
- [ ] **Performance**: Page load speed, animations
- [ ] **Functionality**: All features working correctly

### Performance Optimization

- **Lazy Loading**: Images and heavy components
- **Throttled Events**: Scroll and resize handlers
- **Efficient DOM**: Minimal DOM manipulation
- **CSS Optimization**: Efficient selectors and animations

## 📊 Browser Support

### Modern Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features Used

- CSS Grid and Flexbox
- CSS Variables (Custom Properties)
- Intersection Observer API
- ES6+ JavaScript features
- CSS Transitions and Animations

## 🤝 Contributing

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feat/amazing-feature`
3. **Follow coding standards** outlined in `.cursorrules`
4. **Test thoroughly** before submitting
5. **Use conventional commits** for commit messages
6. **Submit a pull request**

### Code Review Checklist

- [ ] Code follows naming conventions
- [ ] Functions are single-responsibility
- [ ] Error handling is implemented
- [ ] Input validation is in place
- [ ] Security best practices followed
- [ ] Performance considerations addressed
- [ ] Documentation is complete
- [ ] Tests pass (if applicable)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

### Getting Help

- **GitHub Issues**: Report bugs or request features
- **Documentation**: Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- **Code Standards**: Review [.cursorrules](.cursorrules) for development guidelines

### Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [Web Development Best Practices](https://web.dev/learn/)
- [CSS Guidelines](https://cssguidelin.es/)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## 🎉 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for typography
- **GitHub** for hosting and deployment
- **Modern web standards** for best practices

---

**Built with ❤️ and modern web standards**

**Live Site**: [https://muahuavang.github.io/My-Portfolio-Site/](https://muahuavang.github.io/My-Portfolio-Site/)

**Repository**: [https://github.com/muahuavang/My-Portfolio-Site](https://github.com/muahuavang/My-Portfolio-Site)
