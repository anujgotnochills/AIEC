import React, { Suspense, lazy } from 'react'
import { SPLINE_CONFIG } from '../config/spline'

// Lazy load Spline to handle cases where the package isn't installed
const SplineComponent = lazy(async () => {
  try {
    // Import the regular React version (not Next.js)
    const { default: Spline } = await import('@splinetool/react-spline')
    console.log('Spline component loaded successfully:', Spline)
    return {
      default: ({ scene, style, onLoad, onError }) => (
        <Spline
          scene={scene}
          style={style}
          onLoad={onLoad}
          onError={onError}
        />
      )
    }
  } catch (error) {
    console.warn('Spline package not found. Using fallback component.')
    console.error('Detailed error information:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      sceneUrl: SPLINE_CONFIG.heroRobotScene
    })
    // Return a fallback component if Spline isn't installed
    return {
      default: ({ scene }) => (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4 animate-bounce">🤖</div>
            <div className="text-cyber-blue font-tech mb-2">
              Spline Package Required
            </div>
            <div className="text-sm text-gray-400 font-tech max-w-md mx-auto">
              Install @splinetool/react-spline to display your 3D robot
            </div>
            <div className="mt-4 text-xs text-gray-500 font-tech">
              npm install "@splinetool/react-spline"
            </div>
            {scene && scene !== "loading..." && (
              <div className="mt-2 text-xs text-cyber-green font-tech">
                Scene ready: {scene.split('/').pop()}
              </div>
            )}
          </div>
        </div>
      )
    }
  }
})

const SplineRobot = ({ 
  sceneUrl, 
  className = "",
  fallbackIcon = "🤖",
  loadingText = "Loading 3D Robot"
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">{fallbackIcon}</div>
            <div className="text-cyber-blue font-tech">
              {loadingText}<span className="loading-dots"></span>
            </div>
            <div className="mt-4 text-sm text-gray-400 font-tech">
              Initializing 3D Scene...
            </div>
          </div>
        </div>
      }>
        <SplineComponent
          scene={sceneUrl || SPLINE_CONFIG.heroRobotScene}
          style={{
            width: '100%',
            height: '100%',
            background: SPLINE_CONFIG.settings.background
          }}
          onLoad={(spline) => {
            console.log('Spline scene loaded successfully:', spline)
            console.log('Scene URL used:', sceneUrl || SPLINE_CONFIG.heroRobotScene)
          }}
          onError={(error) => {
            console.error('Spline loading error:', error)
            console.error('Error details:', {
              message: error.message,
              stack: error.stack,
              sceneUrl: sceneUrl || SPLINE_CONFIG.heroRobotScene
            })
            // Log additional debugging information
            console.log('Current Spline config:', SPLINE_CONFIG)
            console.log('Scene being loaded:', sceneUrl || SPLINE_CONFIG.heroRobotScene)
          }}
          // Add required Spline properties
          className="spline-container"
          loading="lazy"
          {...SPLINE_CONFIG.splineProps}
          // Debug info
          title="AIEC Spline Robot"
          aria-label="Interactive 3D Robot Model"
          // Additional required properties for Spline component
          width="100%"
          height="100%"
          renderOnDemand={false}
          preload={true}
        />
      </Suspense>
    </div>
  )
}

export default SplineRobot
