# Digital Dendrites

The official website for Sintient Labs - exploring the neural pathways of artificial intelligence through modern web design. Built with HTML, CSS, and JavaScript, featuring a clean design, interactive elements, and ready-to-deploy configurations for multiple platforms.

## 🚀 Quick Start

This is a static website that can be deployed to any static hosting provider. The project includes configurations for:

- **Netlify** (recommended - includes form handling)
- **Vercel** (great developer experience)
- **GitHub Pages** (free hosting)

## 📁 Project Structure

```
digital-dendrites/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
├── vercel.json         # Vercel configuration
├── CNAME               # GitHub Pages custom domain
├── WARP.md            # Development guidance
└── README.md           # This file
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

Netlify provides the easiest deployment with built-in form handling.

#### Steps:
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/sintientlabs/digital-dendrites.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose your GitHub repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (current directory)
   - Click "Deploy site"

3. **Configure Custom Domain**
   - In Netlify dashboard → Site settings → Domain management
   - Click "Add custom domain"
   - Enter `sintientlabs.com`
   - Follow DNS configuration instructions
   - Add these DNS records at your domain provider:
     ```
     Type: A
     Name: @ (or root domain)
     Value: 75.2.60.5

     Type: CNAME
     Name: www
     Value: yoursitename.netlify.app
     ```

4. **SSL Certificate**
   - Netlify automatically provides SSL certificates
   - Certificate will be active within minutes

#### Features:
- ✅ Contact form automatically works
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Continuous deployment from Git

### Option 2: Vercel

Great developer experience with excellent performance.

#### Steps:
1. **Push to GitHub** (same as above)

2. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework preset: "Other"
   - Click "Deploy"

3. **Configure Custom Domain**
   - In Vercel dashboard → Project settings → Domains
   - Add `sintientlabs.com`
   - Configure DNS records as shown:
     ```
     Type: A
     Name: @ (or root domain)
     Value: 76.76.19.61

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

#### Features:
- ✅ Automatic HTTPS
- ✅ Global edge network
- ✅ Serverless functions support
- ⚠️ Contact form needs additional setup (Formspree/etc.)

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:
1. **Push to GitHub** (same as above)

2. **Enable GitHub Pages**
   - Go to repository → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
   - Click "Save"

3. **Configure Custom Domain**
   - In Pages settings, add custom domain: `sintientlabs.com`
   - Configure DNS at your domain provider:
     ```
     Type: A
     Name: @ (or root domain)
     Values: 
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```

#### Features:
- ✅ Free hosting
- ✅ Automatic HTTPS (after domain verification)
- ✅ Direct Git integration
- ⚠️ Contact form needs external service

## 🎨 Customization

### Update Content
- **Hero Section**: Edit lines 40-47 in `index.html`
- **Work Projects**: Update the work grid starting at line 69
- **About Section**: Modify content from line 120
- **Contact Info**: Update lines 165-179

### Styling
- **Colors**: Modify CSS custom properties in `styles.css`
- **Fonts**: Change the Google Fonts import in `index.html` head
- **Layout**: Adjust grid layouts and spacing in `styles.css`

### Contact Form

The contact form is pre-configured for Netlify. For other platforms:

**Formspree (recommended)**:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**EmailJS**:
```html
<!-- Add EmailJS SDK to head -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<!-- Update form handling in script.js -->
```

## 📱 Features

- **Responsive Design**: Works on all devices
- **Modern Animations**: Smooth scroll and fade-in effects
- **Contact Form**: Ready for Netlify deployment
- **SEO Ready**: Meta tags and semantic HTML
- **Performance Optimized**: Minimal dependencies
- **Accessibility**: WCAG compliant structure

## 🛠 Development

For local development:

1. Clone the repository
2. Open `index.html` in a browser, or
3. Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (if you have live-server)
   npx live-server

   # PHP
   php -S localhost:8000
   ```

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Chrome Mobile (latest)

## 🔧 DNS Configuration Summary

| Platform | A Record | CNAME (www) |
|----------|----------|-------------|
| Netlify | 75.2.60.5 | sitename.netlify.app |
| Vercel | 76.76.19.61 | cname.vercel-dns.com |
| GitHub Pages | 185.199.108-111.153 | username.github.io |

## 📞 Support

For deployment issues:
- **Netlify**: [Netlify Documentation](https://docs.netlify.com/)
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **GitHub Pages**: [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🎯 Next Steps

After deployment:
1. Test all functionality on mobile and desktop
2. Set up analytics (Google Analytics, Plausible, etc.)
3. Configure monitoring (Uptime Robot, etc.)
4. Add more content and projects
5. Consider adding a blog section

## 📄 License

This project is open source and available under the [MIT License](LICENSE).