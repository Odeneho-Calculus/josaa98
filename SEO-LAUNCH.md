# Search visibility and launch checklist

Production domain: https://josaa98.org

## Implemented in the project

`npm run build` generates readable HTML for `/`, `/services`, `/gallery`, `/privacy` and `/terms`, with a distinct title, description and canonical URL for each page. The site stays interactive once JavaScript loads. The build also creates a page sitemap with all 22 gallery image URLs. Business, website and page structured data use the `.org` domain, Kumasi, and the approved email and phone number.

Vercel, Netlify-style redirects and Apache configuration serve the generated pages directly and return a 404 for unknown URLs. The 404 page is marked `noindex`. Run `npm run check:seo` after building to check the generated artifacts.

## Required after deployment

1. Deploy the entire `dist` output. This work changes local files; it does not publish the live website.
2. In Google Search Console, add and verify the **Domain property** `josaa98.org` using the DNS TXT record provided by Google. Do not invent a verification token.
3. Submit `https://josaa98.org/sitemap.xml` in Search Console. Inspect the homepage, services page and gallery using the live URL test, then request indexing.
4. Add and verify the site in Bing Webmaster Tools, or import the verified Search Console property, and submit the sitemap there.
5. Create or claim the real Google Business Profile. Verify the business and add its exact address or legitimate service area, business category, phone, opening hours, photos and `https://josaa98.org/`.
6. Check the deployed homepage, `/services` and `/gallery` have HTML content, correct canonical URLs and status 200; verify a deliberately nonexistent URL returns HTTP 404. Confirm HTTP and www variants redirect to the preferred HTTPS domain using hosting/domain settings.
7. Use Google's Rich Results Test and PageSpeed Insights against the live pages. Monitor indexing and search queries in Search Console. Address problems actually reported there.

## Company information still needed

- Exact office address / GhanaPost GPS address / confirmed Maps pin. Do not publish guessed coordinates.
- Actual Facebook, Instagram and LinkedIn profile URLs. The current footer links are placeholders and need to be supplied or removed.
- Confirmation that the three existing client testimonials are real and approved. They were already in the project; do not treat them as verified evidence or add review ratings to structured data.
- Real project names, locations, scope and completion status for future case studies.
- Confirmed company registration, professional credentials, team details and operating hours before making additional claims.

Analytics and conversion tracking can be added when a provider and account are selected. The present enquiry form opens WhatsApp; it does not store enquiries in a company inbox/database. The privacy policy should be reviewed against the actual hosting and tracking setup.

## Expectations

Search visibility depends on deployment, crawling, indexing, content quality and business reputation. A sitemap or crawl request does not guarantee immediate indexing or a particular ranking. Google says recrawling can take days to weeks. Real customer reviews, complete business details and reputable links help establish local visibility; avoid fake reviews and bought links.

References:
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://support.google.com/business/answer/7091
