# RapidRoute Transport Jekyll Website

A complete multi-page transport, logistics and goods delivery business advertisement website built with Jekyll, HTML5, Bootstrap 5, CSS3, JavaScript and Liquid templating.

## Pages

- Home
- About Us
- Services
- Fleet
- Routes / Locations
- Pricing / Quote Request
- Gallery
- Testimonials
- Blog
- Contact Us

## Local Setup

1. Install Ruby from https://rubyinstaller.org/ on Windows, or use your system package manager on macOS/Linux.
2. Open a terminal in this project folder.
3. Install dependencies:

```bash
bundle install
```

4. Run the website locally:

```bash
bundle exec jekyll serve
```

5. Open the local address shown in the terminal, usually:

```text
http://127.0.0.1:4000
```

## Replace Images

The site includes lightweight SVG placeholder assets in `assets/images/`. Replace them with real transport photos when available, or change the page image paths to your preferred `.jpg`, `.png`, or `.webp` files.

Recommended real image names:

- `assets/images/hero-transport.jpg`
- `assets/images/truck-fleet.jpg`
- `assets/images/logistics-warehouse.jpg`
- `assets/images/cargo-loading.jpg`
- `assets/images/delivery-truck.jpg`
- `assets/images/highway-transport.jpg`
- `assets/images/driver-service.jpg`
- `assets/images/contact-office.jpg`

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project.
2. In the repository, go to Settings > Pages.
3. Choose the branch you want to publish, usually `main`.
4. Select the root folder as the publishing source.
5. Save and wait for GitHub Pages to publish the site.

If your site is hosted under a repository subpath, update `baseurl` in `_config.yml`.

## Deploy to Netlify

1. Create a Netlify account and import the GitHub repository.
2. Use this build command:

```bash
bundle exec jekyll build
```

3. Use this publish directory:

```text
_site
```

4. Deploy the site.

## Notes

- Contact and quote forms are front-end designs with validation. Connect them to Netlify Forms, Formspree, a CRM, or your own backend when ready.
- The Google Maps section is a placeholder. Replace it with your real Google Maps iframe.
- Update phone, WhatsApp, email and address values in `_config.yml`.
