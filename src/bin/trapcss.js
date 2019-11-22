import usually from 'usually'
import { reduceUsage } from 'argufy'
import { readFileSync, writeFileSync } from 'fs'
import trapcss from '../'
import { _input, _output, argsConfig, _css, _version, _help } from './args'

/**
 * @license
 * TrapCSS: Remove unused CSS selectors based on HTML files.
 *
 * Copyright (C) 2019 Art Deco
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

if (_help) {
  const usage = usually({
    description: 'Remove unused CSS',
    example: 'trapcss index.html example.html -c style.css -o style-dropped.css',
    line: 'trapcss input.html[,n.html,...] -c style.css [-o output] [-hv]',
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
  const { sels } = trapcss({
    css,
    html,
  })
  sels.forEach(sel => whitelist.add(sel))
})

const cleaned = trapcss({
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