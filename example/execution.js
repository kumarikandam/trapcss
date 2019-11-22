import idio from '@idio/idio'
import puppeteer from 'puppeteer'
import rqt from 'rqt'
import dropcss from '../src'

(async () => {
  const { app, url } = await idio({
    static: {
      use: true,
      root: 'example/www',
    },
  })
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const html = await page.content()
    const styleHrefs = await page.$$eval('link[rel=stylesheet]', els => Array.from(els).map(s => s.href))
    await browser.close()

    await Promise.all(styleHrefs.map(async href => {
      const css = await rqt(href)
      let start = +new Date()

      let clean = dropcss({
        css,
        html,
      })

      console.log({
        stylesheet: href,
        cleanCss: clean.css,
        elapsed: +new Date() - start,
      })
    }))
  } catch (err) {
    console.log(err)
  } finally {
    await app.destroy()
  }
})()