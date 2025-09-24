# 🚨 Spline Package Installation Required

The AIEC landing page is ready to use Spline 3D robots, but the Spline package needs to be installed first.

## 🔧 Quick Fix

**Open PowerShell in this directory and run:**

```powershell
npm install "@splinetool/react-spline"
```

## 📋 Step-by-Step Instructions

1. **Open PowerShell or Command Prompt**
2. **Navigate to the project directory:**
   ```
   cd "d:\Personal Projects\aiec landing page"
   ```
3. **Install the package:**
   ```
   npm install "@splinetool/react-spline"
   ```
4. **Restart the development server:**
   ```
   npm run dev
   ```

## 🔄 Alternative Methods

### Using Yarn
```bash
yarn add @splinetool/react-spline
```

### Manual Package.json Edit
1. Open `package.json`
2. Add to dependencies:
   ```json
   "@splinetool/react-spline": "^2.2.6"
   ```
3. Run `npm install`

## ✅ After Installation

Once installed, you can:
1. Create your 3D robot in [Spline](https://spline.design)
2. Export the scene URL
3. Update `src/config/spline.js` with your URL
4. See your robot in the hero section!

## 🆘 Still Having Issues?

- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and run `npm install` again
- Check the full setup guide in `SPLINE_SETUP.md`

---

**Current Status:** The landing page will show a fallback message until the Spline package is installed.
