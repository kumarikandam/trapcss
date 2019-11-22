import usually from 'usually'
import { reduceUsage } from 'argufy'
import { readFileSync, writeFileSync } from 'fs'
import dropcss from '../'
import { _input, _output, argsConfig, _css, _version, _help } from './args'

if (_help) {
  const usage = usually({
    description: 'Remove unused CSS',
    example: 'dropcss index.html example.html -c style.css -o style-dropped.css',
    line: 'dropcss input.html[,n.html,...] -c style.css [-o output] [-hv]',
    usage: reduceUsage(argsConfig),
  })
  console.log(usage)
} else if (_version) {
  console.log(require('../../package.json').version)
}

if (!_css) {
  console.error('Please pass CSS path')
  process.exit(1)
}
const css = /** @type {string} */ (readFileSync(_css, 'utf8'))

// whitelist
let whitelist = new Set()

_input.forEach((input) => {
  const html = /** @type {string} */ (readFileSync(input, 'utf8'))
  const { sels } = dropcss({
    css,
    html,
  })
  sels.forEach(sel => whitelist.add(sel))
})

const cleaned = dropcss({
  html: '',
  css,
  shouldDrop: sel => !whitelist.has(sel),
})

if (_output) {
  writeFileSync(_output, cleaned.css)
  console.error('Output written to %s', _output)
} else {
  console.log(cleaned.css)
}