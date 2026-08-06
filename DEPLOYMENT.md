# Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free)
- Domain name (optional)

## Steps to Deploy

### 1. Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Simply Smart Money blog"
git branch -M main
git remote add origin https://github.com/yourusername/simply-smart-money.git
git push -u origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "New Project"
4. Select your GitHub repository
5. Click "Import"
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

### 3. Custom Domain (Optional)
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records with your domain provider
4. Vercel will verify and activate SSL

### 4. Environment Variables
1. Go to Settings → Environment Variables
2. Add any needed env vars from `.env.local`
3. Redeploy if needed

### 5. Monitor Performance
- Use Vercel Analytics to track performance
- Check Core Web Vitals
- Monitor error logs

## Post-Deployment Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Check contact form works
- [ ] Verify blog posts load correctly
- [ ] Test navigation and links
- [ ] Check SEO meta tags
- [ ] Verify robots.txt and sitemap
- [ ] Test newsletter signup (if implemented)
- [ ] Check loading performance
- [ ] Set up error tracking (optional)
- [ ] Configure analytics (optional)

## Continuous Deployment

Push changes to GitHub main branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will automatically redeploy!

## Troubleshooting

**Build fails**: Check build logs in Vercel dashboard
**Images not loading**: Verify image domains in `next.config.js`
**Styles not applying**: Clear Vercel cache and redeploy
**Environment variables not working**: Verify they're set in Vercel dashboard

## Support
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Docs: https://docs.github.com
