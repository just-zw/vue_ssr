import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createRequire } from 'module'
const app = express()
const require = createRequire(import.meta.url)
const resolve = (p) =>
path.resolve(path.dirname(fileURLToPath(import.meta.url)), p)
let vite
debugger

vite = await require('vite').createServer({
    server: {
      middlewareMode: true
    },
    appType: 'custom'
  })
  app.use(vite.middlewares)
app.use('*', async (req, res, next) => {

  const url = req.originalUrl
    let template,render
    template = fs.readFileSync(resolve('../index.html'), 'utf-8')
    template = await vite.transformIndexHtml(url, template)
    render = (await vite.ssrLoadModule('/src/main.js')).render;
    const tpl = await render()
    const html = template.replace(`<!--ssr-outlet-->`, tpl)
    console.log(tpl, 'zwtpl');
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    console.log(render);
    })
    app.listen(4444)