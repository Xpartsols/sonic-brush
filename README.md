# Sonic Brush® — Shopify About Us Story Page

This repository contains the stand-alone, fully responsive, and highly optimized custom Shopify story page.

## 📄 File Structure
* **`about-us-shopify.html`**: The main HTML structure, styled via tailwind CSS and native styles, with premium micro-animations (ambient glows, grow-down separators, and smooth easing count-up numbers).
* **`assets/`**: Local copies of the DTS model images and assets used for local testing.

## 🚀 Shopify Integration Instructions
1. **Prepare Assets**:
   * Upload all files inside the `assets/story/` and `assets/videos/` directories to your Shopify Admin under **Content > Files**.
   * Copy the generated Shopify CDN URLs for each asset.
2. **Update Image and Video Links**:
   * Open `about-us-shopify.html`.
   * Find each `src="..."` tag containing a path to `assets/...`.
   * Replace the local path with the corresponding Shopify CDN URL you copied in step 1.
3. **Embed in Shopify**:
   * Create a new Page in Shopify (or edit your existing About page).
   * Add a **Custom Liquid** section in your theme editor.
   * Copy the entire code content of your updated `about-us-shopify.html` and paste it directly into the Custom Liquid block.
