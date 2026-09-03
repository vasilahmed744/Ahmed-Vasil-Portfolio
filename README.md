# Ahmed Vasil | Cybersecurity Portfolio

A responsive, dependency-free static portfolio built for GitHub Pages. It presents authorised security labs, ethical research, technical notes, skills, and professional development without publishing sensitive testing material.

## Preview locally

From this project folder, run either command and open the listed local URL:

```powershell
py -m http.server 8000
```

```powershell
npx serve .
```

Stop the server with `Ctrl+C`.

## Update content safely

Most visible content is kept in [js/portfolio-data.js](js/portfolio-data.js): project cards, technical notes, learning themes, tool categories, timeline entries, email, and social-link placeholders. Keep claims factual and only add work performed in environments where you had explicit authorisation.

For structure and wording, edit `index.html`. For styling, edit `css/styles.css`. Place public-safe images inside `assets/`.

Before publishing, replace all occurrences of these placeholders:

- `your.email@example.com`
- `your-username`
- `https://example.github.io/Ahmed-Vasil-Portfolio/`

That final URL should be your GitHub Pages address, normally `https://YOUR-GITHUB-USERNAME.github.io/Ahmed-Vasil-Portfolio/`.

## Privacy and security checklist

Never commit credentials, private keys, VPN files, CTF flags, client names, target IPs/domains, raw scan output, proof-of-concept exploit code, or confidential vulnerability reports. The included `.gitignore` excludes common sensitive artefacts, but it cannot guarantee safety—review every file and every claim before committing.

## GitHub Pages (after review and push)

1. On GitHub, open the repository **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`, then save.
4. After it deploys, update the canonical URL, Open Graph URL/image as applicable, `robots.txt`, and `sitemap.xml` with the exact Pages address.

The site uses no build step, frameworks, package manager, analytics, or form provider. The contact action uses a standard `mailto:` link.
