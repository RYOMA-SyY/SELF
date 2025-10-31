## Deploying this portfolio to Cloudflare Pages

Short: connect this repository to Cloudflare Pages (no build required). You get a free `*.pages.dev` domain and automatic HTTPS.

Steps — quick setup

1. Create a Git repo for this project (if you don't have one):

```powershell
cd 'c:\RIYOMA\FILES\VS PROJECTS\Projects\DONE\SELF\portfolio'
git init
git add .
git commit -m "Initial portfolio"
# create a repo on GitHub and then:
git remote add origin <your-git-remote-url>
git branch -M main
git push -u origin main
```

2. Open Cloudflare dashboard → Pages → Create a project.
   - Connect your Git provider (GitHub/GitLab/Bitbucket) and authorize.
   - Select the repository you pushed above.
   - For "Framework preset" choose "None".
   - Build command: leave empty (no build step).
   - Build output directory: `.` (the repository root).
   - Click "Save and Deploy".

3. After deploy completes you'll get a project URL like `https://<your-project>.pages.dev`.

Custom domain (optional)
- If your domain is managed by Cloudflare: go to Pages → your project → Settings → Custom domains → Add custom domain and follow the prompts. Cloudflare will verify and provision TLS automatically.
- If your domain is elsewhere: add a CNAME record pointing your domain (e.g. `www`) to your Pages domain (`<your-project>.pages.dev`) and then add the custom domain in the Pages UI. Follow the UI verification steps.

CLI (optional) — publish with Wrangler
- Install Wrangler v2: `npm install -g wrangler`
- Publish the current folder:

```powershell
wrangler pages publish . --project-name="my-portfolio"
```

Notes & tips
- If you later add a build step (e.g., Hugo, Gatsby, or an npm build), set the appropriate build command and output directory in Pages settings.
- If your site will be served from a subpath (rare for Pages), set a `<base href="/subpath/">` in your HTML pages.
- Verify in browser DevTools (Network & Console) after deploy — check for missing assets and any JS errors.

Local verification (quick)

```powershell
# run a quick static server and open the site locally
cd 'c:\RIYOMA\FILES\VS PROJECTS\Projects\DONE\SELF\portfolio'
python -m http.server 8000
# open http://localhost:8000 in your browser
```

Recommended low-cost registrars for a professional domain
- Porkbun, Namecheap, Cloudflare Registrar — prices often $8–$15/year for common TLDs.

If you want, I can:
- create a small `cloudflare-pages.md` with exact UI screenshots and settings (short). 
- or prepare a `wrangler`-based deploy script if you prefer CLI automation.