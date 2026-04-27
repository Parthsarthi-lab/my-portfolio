This is a static-exportable Next.js personal website configured for GitHub Pages.

## Local Development

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## GitHub Pages Deployment

This repo is configured to publish on GitHub Pages:

- `next.config.ts` uses `output: "export"`
- `next/image` is set to `unoptimized`
- `public/.nojekyll` is included for Pages compatibility
- `.github/workflows/deploy.yml` publishes the generated `out` folder

## How To Deploy

1. Push this repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set the source to `GitHub Actions`.
5. Push to `main`.

The workflow will build the static export and deploy it automatically.

## Base Path Behavior

If this is deployed as a project repository on GitHub Pages, the build automatically uses:

```txt
/<repo-name>
```

as the base path.

If this is deployed as a user or organization site like `username.github.io`, no extra base path is added.
