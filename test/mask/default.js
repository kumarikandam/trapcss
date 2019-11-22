import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import trapcss from '../../src'

const keyframes = makeTestSuite('test/result/keyframes.scss', {
  getResults() {
    const css = this.preamble
    const prepend = this.input

    const { css: out } = trapcss({
      html: '<div></div>',
      css: prepend + css,
    })
    return out.replace(prepend, '')
  },
  context: Context,
})

const fontface = makeTestSuite('test/result/fontface.scss', {
  getResults() {
    const css = this.preamble
    const prepend = this.input

    const { css: out } = trapcss({
      html: '<div></div>',
      css: prepend + css,
    })
    return out.replace(prepend, '')
  },
  context: Context,
})

const fontfaceCustomProps = makeTestSuite('test/result/fontface-custom-props.scss', {
  getResults() {
    const prepend = this.preamble
    const css = this.input

    const { css: out } = trapcss({
      html: '<div></div>',
      css: this.prepend == 'false' ? css : (prepend + css),
    })
    return out.replace(css, '')
  },
  context: Context,
})

export const customProps = makeTestSuite('test/result/custom-props.scss', {
  getResults() {
    const [,html] = /content: '(.+?)'/.exec(this.html)
    const { css } = trapcss({
      html,
      css: this.input,
    })
    return css
  },
})

export default {
  'Unused @keyframes': keyframes,
  'Unused @font-face': fontface,
  '@font-face (custom props)': fontfaceCustomProps,
}