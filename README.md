# AIEC Landing Page

A high-polish, interactive landing page for the AI & Technology Society (AIEC) built with React, featuring 3D animations, particle effects, and modern design elements inspired by top-tier tech event websites.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite + Tailwind CSS
- **3D Animations**: Spline 3D robot model with interactive animations
- **Particle Effects**: Interactive particle background with react-tsparticles
- **Scroll Animations**: GSAP ScrollTrigger for smooth scroll-based animations
- **Circuit Animations**: Custom SVG circuit paths that draw on scroll
- **Glitch Effects**: Cyberpunk-style glitch text animations
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Lazy loading and smooth animations

## 🎨 Design Features

- **Cyberpunk/Neon Theme**: Futuristic color palette with glowing effects
- **Interactive Elements**: Hover effects, 3D transforms, and particle interactions
- **Smooth Navigation**: Sticky navbar with smooth scrolling anchors
- **Modern Typography**: Custom fonts (Orbitron, Rajdhani) for tech aesthetic
- **Gradient Backgrounds**: Dynamic gradient overlays and borders

## 📦 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "d:\Personal Projects\aiec landing page"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the site

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with smooth scrolling
│   ├── Hero.jsx            # Hero section with 3D robot and glitch text
│   ├── SplineRobot.jsx     # Spline 3D robot component
│   ├── About.jsx           # About section with animated cards
│   ├── Events.jsx          # Events showcase with hover effects
│   ├── Team.jsx            # Team member profiles
│   ├── Sponsors.jsx        # Sponsors and partners section
│   ├── Contact.jsx         # Contact form and information
│   ├── ParticlesBackground.jsx  # Particle system background
│   └── CircuitAnimation.jsx     # SVG circuit animations
├── config/
│   └── spline.js           # Spline 3D scene configuration
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles and animations
```

## 🎯 Sections Overview

### Hero Section
- Full-screen hero with 3D animated robot
- Glitch text effect for main heading
- Particle background with interactive elements
- Smooth scroll indicator

### About Section
- Mission statement and society overview
- Animated statistics counters
- Feature cards with hover effects
- Technology tags and highlights

### Events Section
- Upcoming and past events showcase
- Event cards with status indicators
- Registration and participation info
- Interactive hover animations

### Team Section
- Team member profiles with photos
- Social media links and achievements
- Animated entrance effects
- Join team call-to-action

### Sponsors Section
- Tiered sponsor display (Platinum, Gold, Silver, Bronze)
- Partner organization showcase
- Become a sponsor call-to-action
- Floating logo animations

### Contact Section
- Contact form with validation
- Contact information cards
- Social media links
- Quick action buttons

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  'cyber-blue': '#00f5ff',
  'cyber-purple': '#8a2be2',
  'cyber-pink': '#ff1493',
  'cyber-green': '#39ff14',
  'neon-yellow': '#ffff00',
  // Add your custom colors
}
```

### Animations
GSAP animations are configured in each component. Modify timing and effects in the respective component files.

### Spline 3D Robot
The robot model is powered by Spline. To use your own 3D robot:

1. **Create your robot in Spline** (spline.design)
2. **Export your scene**: Click "Export" > "Code Export" > "React"
3. **Copy the scene URL** from the generated code
4. **Update the configuration** in `src/config/spline.js`:
   ```javascript
   export const SPLINE_CONFIG = {
     heroRobotScene: "https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
   }
   ```

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library with ScrollTrigger
- **Spline** - 3D design and interactive animations
- **React TSParticles** - Particle system
- **Framer Motion** - Additional animations
- **React Intersection Observer** - Scroll detection

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository to your hosting platform
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 🎯 Performance Tips

- Images are optimized and lazy-loaded
- 3D models use efficient geometry
- Animations are hardware-accelerated
- Code splitting is handled by Vite
- Particle count is optimized for performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or issues:
- Create an issue in the repository
- Contact the AIEC team
- Check the documentation

---

Built with ❤️ by the AIEC Development Team
