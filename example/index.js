/* alanode example/ */
import trapcss from '../src'

let html = `
    <html>
        <head></head>
        <body>
            <p>Hello World!</p>
        </body>
    </html>
`

let css = `
    html {
      background: yellow;
      /* @alternate */
      background: green;
    }
    .card {
      padding: 8px;
    }

    p:hover a:first-child {
      color: red;
    }
`

const whitelist = /#foo|\.bar/

let dropped = new Set()

let cleaned = trapcss({
  html,
  css,
  shouldDrop(sel) {
    if (whitelist.test(sel))
      return false
    else {
      dropped.add(sel)
      return true
    }
  },
})

console.log(cleaned.css)

console.error(dropped)