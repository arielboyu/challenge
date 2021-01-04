const {Router} = require("express")
const fetch = require('node-fetch')
const server = Router()


server.get('/search', async (req, res) => {
    const {q} = req.query
    const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    const productos = await resp.json()
    res.json(productos.results)

})


module.exports = server
