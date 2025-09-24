// Spline 3D Scene Configuration
// Replace the URL below with your own Spline scene URL

export const SPLINE_CONFIG = {
  // Main robot scene for hero section
  heroRobotScene: "https://prod.spline.design/EvgyMmRJiP19tMoh/scene.splinecode",

  // Alternative scenes (you can add more)
  alternativeScenes: {
    robot1: "https://prod.spline.design/EvgyMmRJiP19tMoh/scene.splinecode",
    robot2: "loading...",
    // You can add more robot scenes here for different sections
  },

  // Spline settings
  settings: {
    background: 'transparent',
    autoRotate: true,
    enableInteraction: true,
    loadingTimeout: 10000, // 10 seconds
  },

  // Spline component props
  splineProps: {
    className: 'spline-scene',
    'data-testid': 'spline-robot',
    // Add any other required properties here
    width: '100%',
    height: '100%',
    renderOnDemand: false,
    preload: true,
  }
}

// Instructions for getting your Spline scene URL:
// 1. Create your 3D robot in Spline (spline.design)
// 2. Click "Export" in Spline
// 3. Choose "Code Export" > "React"
// 4. Copy the scene URL from the generated code
// 5. Replace "loading..." above with your scene URL
