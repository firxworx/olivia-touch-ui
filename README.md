# olivia-touch-ui

Experimental UI playground for <https://olivia.party> and for testing out different interaction and engagement strategies with the project's namesake stakeholder/user.

This project is a front-end web app written in TypeScript with React + NextJS + TailwindCSS.

The configuration is intended for static export from NextJS <https://nextjs.org/docs/advanced-features/static-html-export>.

## Implementation Notes

Due to the target user's extremely limited mobility where she can only crudely and haphazardly use a touchscreen, various browser + touch features are disabled that users with greater physical abilities might prefer to keep, such as multi-touch and the right-click/long-press context menu. These modifications are encapsulated within the `InteractionSuppressor` component that wraps `pages/_app.tsx`.

Additional control over possible interactions can be obtained by passing flags to the browser (such as `--kiosk` mode in Chromium-based browsers and Firefox) or even turning features off or on at the driver or OS level.

This project was developed for use with Chromium/Chrome. Control over touch features can vary between browsers, so additional development + testing may be required to support additional browsers. Other app features should be well-supported by all modern web browsers.

## Development

Project code including NextJS pages and components should be added to the `src/` folder.

To start the development server:

```bash
yarn dev
```

Refer to `package.json` for available scripts and flags.

The development server can be accessed at: [http://localhost:3077](http://localhost:3077).

If you do not plan to export the project as a static site, [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed at [http://localhost:3077/api/hello](http://localhost:3077/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

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

## Kiosk Mode

<https://thegeekpage.com/how-to-setup-chrome-kiosk-mode-in-windows-10/>

To exit kiosk mode: `alt + tab`.

### Chrome / Chromium Flags

Noting various chrome/chromium flags to consider when launching the browser binary/executable that can be helpful.

```sh
--chrome --kiosk --app="https://youtube.com/" --force-app-mode --start-fullscreen --disable-pinch --no-user-gesture-required --overscroll-history-navigation=0 --no-context-menu --profile-directory="PROFILE_NAME_HERE"
--autoplay-policy=no-user-gesture-required
```

## Acknowledgements

Thanks to those who release sound effects under the CC-0 (public domain) license:

- https://freesound.org/people/jayfrosting/ (cheer sound effects)
