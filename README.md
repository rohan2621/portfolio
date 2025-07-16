# Rohan Timalsina - Portfolio Website

A modern, animated portfolio website showcasing Rohan's skills, projects, and professional experience. This portfolio is inspired by contemporary web design trends and features smooth animations, responsive design, and clean typography.

## 🌟 Features

- **Animated Hero Section** - Eye-catching introduction with smooth fade-in animations
- **Responsive Navigation** - Fixed navigation bar with smooth scrolling and mobile hamburger menu
- **Interactive Animations** - Scroll-triggered animations using Intersection Observer API
- **Project Showcase** - Detailed project cards with technology tags and links
- **Skills Display** - Organized skill categories with hover effects
- **Contact Section** - Easy-to-find contact information and social links
- **Mobile-First Design** - Fully responsive across all device sizes
- **Performance Optimized** - Throttled scroll events and efficient animations

## 🚀 Technologies Used

- **HTML5** - Semantic markup and accessibility features
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom animations
- **JavaScript (ES6+)** - Interactive functionality and smooth user experience
- **Google Fonts** - Inter font family for clean typography

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── README.md          # Project documentation
├── css/
│   └── style.css      # Main stylesheet with animations
├── js/
│   └── script.js      # Interactive functionality
└── assets/            # Images and other assets (if needed)
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Black (#000000) for text and accents
- **Secondary**: White (#ffffff) for backgrounds
- **Accent**: Dark gray (#333333) for hover states
- **Text Light**: Gray (#666666) for secondary text

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive Text**: Clamp() function for scalable typography
- **Font Weights**: 300, 400, 500, 600, 700

### Animations
- **Fade In Up**: Smooth entrance animations for content
- **Hover Effects**: Interactive button and card animations
- **Scroll Indicators**: Animated scroll arrow in hero section
- **Staggered Animations**: Sequential reveal of project cards and skills

## 🛠️ Installation & Usage

1. **Clone or Download** the repository
2. **Open** `index.html` in your preferred web browser
3. **Enjoy** exploring the portfolio!

### Local Development
```bash
# If you want to serve the files locally
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000` in your browser.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Sections Overview

### Hero Section
- Animated greeting and name
- Professional subtitle
- Call-to-action buttons
- Social media links
- Scroll indicator

### About Section
- Professional summary
- Skills organized by category
- Technology stack display

### Projects Section
- Featured project cards
- Technology tags
- GitHub links
- Project descriptions

### Contact Section
- Contact information
- Social media links
- Professional call-to-action

## 🔧 Customization

### Adding New Projects
1. Open `index.html`
2. Find the `projects-grid` section
3. Add a new `project-card` div with the following structure:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">Project Name</h3>
        <div class="project-links">
            <a href="github-link" target="_blank" class="project-link">GitHub</a>
        </div>
    </div>
    <p class="project-description">Project description here...</p>
    <div class="project-tech">
        <span class="tech-tag">Technology</span>
        <!-- Add more tech tags as needed -->
    </div>
</div>
```

### Updating Skills
1. Open `index.html`
2. Find the `skills-grid` section
3. Add or modify skill categories and individual skills

### Changing Colors
1. Open `css/style.css`
2. Modify the CSS custom properties in the `:root` selector:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    /* ... other variables */
}
```

## 🌐 Browser Support

- **Chrome** 60+
- **Firefox** 60+
- **Safari** 12+
- **Edge** 79+

## 📈 Performance Features

- **Intersection Observer** for efficient scroll animations
- **Throttled scroll events** to improve performance
- **CSS transforms** for hardware-accelerated animations
- **Optimized images** and minimal external dependencies

## 🔮 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section integration
- [ ] Contact form with backend integration
- [ ] More interactive animations
- [ ] SEO optimization
- [ ] PWA features
- [ ] Analytics integration

## 📞 Contact Information

- **Email**: [timalsinarohan9@gmail.com](mailto:timalsinarohan9@gmail.com)
- **GitHub**: [github.com/rohan2621](https://github.com/rohan2621)
- **LinkedIn**: [linkedin.com/in/rohan2621](https://www.linkedin.com/in/rohan2621/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by modern portfolio design trends
- Google Fonts for typography
- CSS Grid and Flexbox for layout
- Intersection Observer API for animations

---

**Built with ❤️ by Rohan Timalsina**

*Passionate about software engineering, cryptography, and AI*
