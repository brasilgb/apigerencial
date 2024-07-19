const database = require('../database/connection')

class SaleController {
    getSales(request, response){
        database.select("*").table("lger_filialassoc").then(filial => {
            console.log(filial)
            response.json(filial)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new SaleController()