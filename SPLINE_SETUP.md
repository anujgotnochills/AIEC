# 🤖 Spline Robot Setup Guide

This guide will help you integrate your own Spline 3D robot into the AIEC landing page.

## 📋 Prerequisites

1. A Spline account (free at [spline.design](https://spline.design))
2. A 3D robot model created in Spline
3. Basic knowledge of React components
4. **Install the Spline package** (see installation section below)

## 📦 Installing Spline Package

The Spline package needs to be installed manually. Try these methods:

### Method 1: PowerShell (Recommended)
```powershell
npm install "@splinetool/react-spline"
```

### Method 2: Command Prompt
```cmd
npm install @splinetool/react-spline
```

### Method 3: Using Yarn
```bash
yarn add @splinetool/react-spline
```

### Method 4: Manual Installation
If the above methods fail:
1. Open your `package.json` file
2. Add this line to the dependencies section:
   ```json
   "@splinetool/react-spline": "^2.2.6"
   ```
3. Run `npm install`

### Troubleshooting Installation
- Make sure you're in the project directory
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install`

## 🎨 Creating Your Robot in Spline

### Step 1: Design Your Robot
1. Go to [spline.design](https://spline.design) and create a new project
2. Use Spline's 3D tools to create your robot:
   - Add basic shapes (cubes, spheres, cylinders)
   - Use materials with metallic/neon properties
   - Add animations (rotation, floating, etc.)
   - Consider the cyberpunk aesthetic of the site

### Step 2: Optimize for Web
1. Keep polygon count reasonable (< 50k faces)
2. Use compressed textures
3. Limit the number of lights
4. Test performance in Spline's preview

### Step 3: Add Animations (Optional)
1. Create subtle idle animations
2. Add hover interactions
3. Consider auto-rotation for visual appeal

## 🚀 Exporting from Spline

### Step 1: Export Your Scene
1. Click the **"Export"** button in Spline
2. Select **"Code Export"**
3. Choose **"React"** as the framework
4. Copy the generated scene URL

### Step 2: Get Your Scene URL
The exported code will look like this:
```jsx
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <Spline scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" />
  );
}
```

Copy the URL from the `scene` prop.

## ⚙️ Integrating into AIEC Landing Page

### Step 1: Update Configuration
Open `src/config/spline.js` and replace the placeholder URL:

```javascript
export const SPLINE_CONFIG = {
  // Replace this with your Spline scene URL
  heroRobotScene: "https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode",
  
  // You can add multiple scenes for different sections
  alternativeScenes: {
    robot1: "https://prod.spline.design/ANOTHER_SCENE/scene.splinecode",
    robot2: "https://prod.spline.design/YET_ANOTHER/scene.splinecode",
  },
  
  settings: {
    background: 'transparent',
    autoRotate: true,
    enableInteraction: true,
    loadingTimeout: 10000,
  }
}
```

### Step 2: Test Your Integration
1. Save the file
2. The development server will automatically reload
3. Check the hero section for your robot
4. Verify it loads properly and animations work

## 🎛️ Customization Options

### Changing Robot Position
In `src/components/Hero.jsx`, you can modify the robot container:

```jsx
{/* 3D Spline Robot Background */}
<div className="absolute inset-0 z-10 opacity-80">
  <SplineRobot 
    fallbackIcon="🤖"
    loadingText="Loading AI Robot"
    className="transform scale-75" // Add custom styling
  />
</div>
```

### Adding Multiple Robots
You can add robots to other sections by importing the `SplineRobot` component:

```jsx
import SplineRobot from './SplineRobot'

// In your component
<SplineRobot 
  sceneUrl={SPLINE_CONFIG.alternativeScenes.robot1}
  fallbackIcon="🦾"
  loadingText="Loading Assistant Robot"
/>
```

### Performance Optimization
1. **Lazy Loading**: The component already uses React Suspense
2. **Conditional Loading**: Only load on desktop if performance is an issue
3. **Fallback Content**: Customize the loading state in `SplineRobot.jsx`

## 🐛 Troubleshooting

### Robot Not Loading
1. **Check the URL**: Ensure your Spline scene URL is correct
2. **Network Issues**: Verify internet connection
3. **Spline Service**: Check if Spline's CDN is accessible
4. **Browser Console**: Look for error messages

### Performance Issues
1. **Reduce Complexity**: Simplify your Spline scene
2. **Lower Quality**: Use fewer materials and lights
3. **Mobile Optimization**: Consider hiding on mobile devices

### Styling Issues
1. **Z-Index**: Ensure proper layering with other elements
2. **Opacity**: Adjust transparency in Hero.jsx
3. **Responsive**: Test on different screen sizes

## 📱 Mobile Considerations

For better mobile performance, you might want to conditionally render:

```jsx
// In SplineRobot.jsx
const isMobile = window.innerWidth < 768

return (
  <div className={`w-full h-full ${className}`}>
    {isMobile ? (
      // Show static image or simpler animation on mobile
      <div className="flex items-center justify-center h-full">
        <div className="text-8xl animate-bounce">🤖</div>
      </div>
    ) : (
      // Show full Spline scene on desktop
      <Suspense fallback={/* loading state */}>
        <Spline scene={sceneUrl || SPLINE_CONFIG.heroRobotScene} />
      </Suspense>
    )}
  </div>
)
```

## 🎯 Best Practices

1. **Keep it Simple**: Don't overcomplicate the robot design
2. **Match the Theme**: Use colors that fit the cyberpunk aesthetic
3. **Test Performance**: Regularly check loading times
4. **Backup Plan**: Always have a fallback for when Spline fails to load
5. **Accessibility**: Ensure the robot doesn't interfere with navigation

## 🆘 Need Help?

- **Spline Documentation**: [docs.spline.design](https://docs.spline.design)
- **React Integration**: Check the official Spline React docs
- **Community**: Join the Spline Discord for help with 3D design

---

Happy robot building! 🤖✨
