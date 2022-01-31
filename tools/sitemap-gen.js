const fs = require('fs')
const glob = require('glob')

const HOST = 'https://jhw123.github.io'

function getUrl(path, changeFreq, priority, isMd = false) {
  let now = new Date().toISOString()
  if (isMd) {
    now = fs.statSync(`${process.cwd()}/src/pages${path}.md`).mtime.toISOString()
  }
  return `    <url>
        <loc>${HOST}${path}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${changeFreq}</changefreq>
        <priority>${priority.toFixed(1)}</priority>
    </url>
`
}

function wrapUrls(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}</urlset>
`
}

function getDynamicRoutes(dir) {
  return glob
    .sync(`${process.cwd()}/src/pages/${dir}/**/*.md`)
    .map(match => match.replace(`${process.cwd()}/src/pages/${dir}/`, '').replace('.md', ''))
}

let urls = ''

// stationary pages
urls += getUrl('', 'monthly', 1.0)
urls += getUrl('/files/hyoungwook_jin_cv.pdf', 'monthly', 0.5)
urls += getUrl('/miscs', 'monthly', 0.5)
urls += getUrl('/projects', 'monthly', 0.5)
urls += getUrl('/articles', 'weekly', 0.5)
urls += getUrl('/tils', 'weekly', 0.5)

// dynamic pages
;['tils', 'miscs', 'articles'].forEach(dir => {
  getDynamicRoutes(dir).forEach(route => {
    urls += getUrl(`/${dir}/${route}`, 'monthly', 0.5, true)
  })
})

const siteMap = wrapUrls(urls)
fs.writeFileSync('static/sitemap.xml', siteMap, 'utf8')
