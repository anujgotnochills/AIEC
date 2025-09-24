@echo off
echo Installing Spline package for React...
echo.

REM Try different methods to install the package
echo Method 1: Standard npm install
call npm install @splinetool/react-spline
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Spline package installed successfully!
    echo You can now use 3D robots in your landing page.
    echo.
    echo Next steps:
    echo 1. Create your robot in Spline (spline.design)
    echo 2. Export and get the scene URL
    echo 3. Update src/config/spline.js with your URL
    echo.
    pause
    exit /b 0
)

echo.
echo Method 2: Using yarn (if available)
call yarn add @splinetool/react-spline
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Spline package installed successfully with Yarn!
    pause
    exit /b 0
)

echo.
echo ❌ Installation failed. Please try manually:
echo.
echo Open PowerShell or Command Prompt and run:
echo npm install "@splinetool/react-spline"
echo.
echo Or visit: https://www.npmjs.com/package/@splinetool/react-spline
echo.
pause
