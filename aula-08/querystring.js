const querystring = require('node:querystring')
const url = require('node:url')

const baseUrl = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'Verão'

})

const fullurl = `${baseUrl}/${uri}`

console.log(fullurl)

const parsedUri = querystring.parse(uri)
console.log(uri)
console.log(parsedUri)
console.log(parsedUri.destino)
console.log(url.parse(fullurl))

const uri2 = querystring.escape('São Paulo')
console.log(uri2)
const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2)