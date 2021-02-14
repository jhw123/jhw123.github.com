const fs = require('fs')
const glob = require('glob')

function getUrl(url, changeFreq, priority) {
  const now = new Date().toISOString()
  return `    <url>
        <loc>${url}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${changeFreq}</changefreq>
        <priority>${priority.toFixed(1)}</priority>
    </url>
`
}

function wrapUrls(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\`
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
urls += getUrl('https://jhw123.github.io', 'yearly', 1.0)
urls += getUrl('https://jhw123.github.io/files/hyoungwook_jin_cv.pdf', 'yearly', 0.5)
urls += getUrl('https://jhw123.github.io/miscs', 'monthly', 0.5)
urls += getUrl('https://jhw123.github.io/tils', 'weekly', 0.5)

// dynamic pages
;['tils', 'miscs'].forEach(dir => {
  getDynamicRoutes(dir).forEach(route => {
    urls += getUrl(`https://jhw123.github.io/${dir}/${route}`, 'monthly', 0.5)
  })
})

const siteMap = wrapUrls(urls)
fs.writeFileSync('static/sitemap.xml', siteMap, 'utf8')
