# Resume

These are the sources for my resume, you can find it on [here](https://resume.silvanocerza.com).

It's built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com) and deployed on [Netlify](https://netlify.com) as a static site.

Most of the information in this readme is for future me to remember how to work on this project.

# Building

To work on the resume:

```bash
pnpm dev
```

If you want to test the PDF generation you can run `pnpm build`, that will build the resume website and create a PDF file from it.
It's not necessary to commit the PDF file as it's generated on the fly each time the website is built for production.

To add new experiences, projects or talks edit the `resume.config.toml` file.

## Deploy

To deploy just push to `master`. Netlify will take care of the rest.
