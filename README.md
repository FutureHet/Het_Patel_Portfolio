# Interactive 3D Portfolio - Het Patel

This is a premium, high-performance interactive 3D portfolio designed to showcase your global experience at Goldman Sachs, Samsung R&D, and more.

## Features
- **Interactive 3D Globe**: Built with Three.js, showing your work locations.
- **Holographic Pillars**: Pins on New York, Albany, Bangalore, and Ahmedabad.
- **Deep-Dive Modals**: Detailed resume points (Google SWE 3 Optimized) appear when clicking a location.
- **Glassmorphic Design**: Modern, high-end aesthetics with fluid animations.
- **Responsive**: Works on desktop and mobile.

## How to View Locally
Since the project uses modern JavaScript ES Modules and Three.js, it **must** be run from a local server (opening the `.html` file directly in the browser will cause security errors).

1. **Option A (VS Code)**: Install the **"Live Server"** extension, right-click `index.html`, and select "Open with Live Server".
2. **Option B (Python)**: Open your terminal in this folder and run:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

## How to Host on GitHub Pages
1. Create a new repository on GitHub (e.g., `portfolio-3d`).
2. Initialize and push these files:
   ```bash
   git init
   git add .
   git commit -m "Initial 3D Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-3d.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** in your GitHub repository and set the source to the `main` branch.
4. Your site will be live at `https://YOUR_USERNAME.github.io/portfolio-3d/`

## Content Customization
- **Experience Details**: Edit the `EXPERIENCE_DATA` object in `main.js`.
- **Styling**: Modify `style.css` for colors and typography.
- **3D Logic**: Adjust the globe rotation or pin colors in `main.js`.
