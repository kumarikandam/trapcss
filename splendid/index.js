/** @type {import('splendid').Config} */
const config = {
  layout: 'splendid/layout/main.html',
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Splendid](https://splendid.sh)',
    },
  ],
  // output: 'docs',
  // appDir: 'splendid',

  // to generate sitemaps, use either folder or domain website.
  // url: 'https://website.github.io/splendid',
  // url: 'https://splendid.page',
}

export default config