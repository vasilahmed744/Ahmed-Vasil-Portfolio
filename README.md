# Ahmed Vasil | Cybersecurity Portfolio

Professional, static cybersecurity portfolio for [Ahmed Vasil](https://github.com/vasilahmed744). It is built with HTML, CSS, and vanilla JavaScript and deploys from `main` to GitHub Pages.

Live site: <https://vasilahmed744.github.io/Ahmed-Vasil-Portfolio/>

## How to Update My Portfolio

Almost all editable portfolio information lives in **[js/portfolio-data.js](js/portfolio-data.js)**. Open that file, change only the relevant field or add an object to the appropriate list, then preview and commit the change. HTML supplies structure, CSS supplies design, and `js/main.js` supplies rendering behaviour.

### Personal information and links

1. **Change email:** set `contact.email` or `contact.professionalEmail`. Leave both empty to hide the email action automatically.
2. **Change GitHub, LinkedIn, TryHackMe, or other profiles:** edit the matching item in `social`. An empty `url` hides that button automatically.
3. **Change identity, title, target roles, or focus:** edit `site`, `person`, `hero`, and `availability`.
4. **Replace the profile photo:** add a public-safe, web-optimised image at `assets/images/profile/ahmed-vasil.webp`, then set `profileImage.src` to that path. The responsive initials avatar remains in place while the path is empty or fails to load. Do not use a generated face or include EXIF/GPS data.
5. **Add a resume:** add the real PDF at `assets/resume/Ahmed-Vasil-Resume.pdf`, then set `resume.enabled` to `true`. Do not enable it before the file exists.

### Portfolio content

6. **Add a skill:** add the skill string to the relevant `skills` category. Add another category by adding another key/value pair.
7. **Add a project:** add one object to `projects`. Only set a link field (`github`, `liveDemo`, `documentation`, or `writeup`) when it is public and safe; empty links do not render. Add public images or screenshots under `assets/images/projects/` and reference them only when ready.
8. **Add education:** add another object to `education`.
9. **Add experience:** add another object to `experience`.
10. **Add training:** add another object to `training`. State training status accurately; do not describe in-progress courses as certifications.
11. **Add a certification:** add another object to `certifications`. `verificationUrl`, `certificateImage`, and `certificatePdf` are optional; their actions hide when blank. Place public certificate assets under `assets/images/certificates/`.
12. **Add a TryHackMe profile:** set `social.tryHackMe.url` and, if desired, `platforms.tryHackMe.profileUrl`. Never add invented rank, badges, room counts, or statistics.
13. **Add a write-up:** add an object to `writeups` with title, summary, category, date, tags, and a public `url`. The polished “coming soon” state is shown while the list is empty.
14. **Add an achievement:** add an object to `achievements` and set `settings.sections.achievements` to `true`.
15. **Show or hide a section:** change its boolean in `settings.sections`. Empty lists and blank optional fields are also handled gracefully.

### SEO and publishing

16. **Synchronise SEO after a name, domain, or social-preview change:** update both `seo` in `js/portfolio-data.js` and the static metadata/JSON-LD in `index.html`. Also update `robots.txt` and `sitemap.xml` if the production URL changes. Search engines need the static HTML values; JavaScript alone is not sufficient.
17. **Test locally:** run the following command in the project folder, then open the local address it prints (normally <http://localhost:3000/>).

   ```powershell
   npx serve .
   ```

18. **Commit and push:** review first, then run:

   ```powershell
   git status
   git diff
   git add -- .
   git commit -m "Describe the update"
   git push origin main
   ```

## Security and privacy rule

Never commit passwords, access tokens, API keys, SSH/private keys, VPN files, CTF flags, raw scan output, target details, client information, private vulnerability reports, unreleased solutions, or personal secrets. The `.gitignore` helps with common artefacts but does not replace a deliberate review.

## Project layout

```text
assets/                 Public-safe images, icons, certificates, and resume files
css/styles.css          Visual design
index.html              Semantic page structure and static SEO metadata
js/portfolio-data.js    Primary editable content configuration
js/main.js              Rendering, visibility, and interaction behaviour
robots.txt              Crawler policy
sitemap.xml             Production sitemap
```

## GitHub Pages

This is a project site deployed from the repository root on branch `main`. In GitHub, use **Settings → Pages → Deploy from a branch → main → /(root)**. The production path is `/Ahmed-Vasil-Portfolio/`, so keep all local asset references relative (for example, `assets/favicon.svg`) rather than root-relative.
