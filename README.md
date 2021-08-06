# olivia-touch-ui

Experimental UI playground for <https://olivia.party> and for testing out different interaction ideas with the project's namesake stakeholder. 

This project is a front-end web app written in TypeScript with React + NextJS + TailwindCSS.

The configuration is intended for static export from NextJS <https://nextjs.org/docs/advanced-features/static-html-export>.

## Development

Project code including NextJS pages and components should be added to the `src/` folder.

To start the development server:

```bash
yarn dev
```

Refer to `package.json` for available scripts and flags.

The development server can be accessed at: [http://localhost:3100](http://localhost:3100).

If you do not plan to export the project as a static site, [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed at [http://localhost:3100/api/hello](http://localhost:3100/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Build

Considerations:

- build targets `es6` (see `tsconfig.json`)
- exports with trailing slash (see `next.config.js`)
- default font is Inter (see `tailwind.config.js` and `src/_document.tsx`) 

To build, run:

```bash
yarn build:static
```

The generated site will output to the `dist/` folder.

Prior to production deployment, remember to review the files in the `public/` folder (e.g. `favicon.ico`) and consider adding custom error pages: https://nextjs.org/docs/advanced-features/custom-error-page

## Common Additions

Support for TailwindUI/TailwindCSS Headless UI and Hero Icons:

`yarn add @headlessui/react @heroicons/react`

TailwindCSS children:

`yarn add tailwindcss-children` then add to `plugins` array in `tailwind.config.js`.

A css classnames library such as `clsx`:

`yarn add clsx`

