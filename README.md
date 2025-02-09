# Site source code

This is source code for the https://serenity-rs.github.io site, built using
Vite.

## Contributing

If you wish to contribute, simply set up a [Node.js][node] environment with the
NPM package manager.

Once you have Node and NPM, install the necessary dependencies with `npm install`.

Afterwards, you may use `npm run dev` to run a dev server to test changes
locally, which will run on `localhost:3000`. Once you are satisfied with the
changes, run `npm run build` to build the site. This will create a minified,
bundled version of the site into the `docs/` directory, which can directly be
served by a HTTP server like [Nginx][nginx], though, of course, this site is
meant to be run on Github Pages.

This site uses [TypeScript][ts] and [SCSS][sass-scss] instead of regular
JavaScript and CSS. When writing CSS, the [RSCSS][rscss] system is used.

[node]: https://nodejs.org
[nginx]: https://nginx.org
[ts]: https://typescriptlang.org
[sass-scss]: https://sasscss.com
[rscss]: https://rstacruz.github.io/rscss/

## License

Source code of this site is under the [ISC license](LICENSE.md).
