import { readFileSync } from 'fs'
import trapcss from '../../src'

const html = readFileSync('example/escaped/index.html', 'utf8')
const css = readFileSync('example/escaped/style.css', 'utf8')

/* start example */
// remap
let css2 = css
  .replace(/\\:/gm, '__0')
  .replace(/\\\//gm, '__1')
  .replace(/\\\?/gm, '__2')
  .replace(/\\\(/gm, '__3')
  .replace(/\\\)/gm, '__4')

let html2 = html.replace(/class=["'][^"']*["']/gm, m =>
  m
    .replace(/:/gm, '__0')
    .replace(/\//gm, '__1')
    .replace(/\?/gm, '__2')
    .replace(/\(/gm, '__3')
    .replace(/\)/gm, '__4')
)

let res = trapcss({
  css: css2,
  html: html2,
})

// undo
res.css = res.css
  .replace(/__0/gm, '\\:')
  .replace(/__1/gm, '\\/')
  .replace(/__2/gm, '\\?')
  .replace(/__3/gm, '\\(')
  .replace(/__4/gm, '\\)')

console.log(res.css)
/* end example */